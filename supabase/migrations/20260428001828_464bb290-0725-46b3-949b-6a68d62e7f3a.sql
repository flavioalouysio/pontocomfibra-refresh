CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

CREATE TABLE public.plan_prices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  region_key TEXT NOT NULL,
  region_label TEXT NOT NULL,
  speed TEXT NOT NULL,
  price TEXT NOT NULL,
  features TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  popular BOOLEAN NOT NULL DEFAULT false,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE (region_key, speed)
);

ALTER TABLE public.plan_prices ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_plan_prices_updated_at
BEFORE UPDATE ON public.plan_prices
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE POLICY "Anyone can view plan prices"
ON public.plan_prices
FOR SELECT
USING (true);

CREATE POLICY "Admins can add plan prices"
ON public.plan_prices
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can edit plan prices"
ON public.plan_prices
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can remove plan prices"
ON public.plan_prices
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can view roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

INSERT INTO public.plan_prices (region_key, region_label, speed, price, features, popular, display_order)
VALUES
  ('campinas', 'Campinas e Região', '300 Mega', '81,90', ARRAY['100% Fibra Óptica', 'WiFi-TOP', 'Instalação Facilitada', 'Sem Franquia de Dados'], false, 1),
  ('campinas', 'Campinas e Região', '600 Mega', '101,90', ARRAY['100% Fibra Óptica', 'WiFi-TOP', 'Instalação Facilitada', 'Sem Franquia de Dados'], true, 2),
  ('cotia', 'Itapecerica e Região', '300 Mega', '101,90', ARRAY['100% Fibra Óptica', 'WiFi-TOP', 'Instalação Facilitada', 'Sem Franquia de Dados'], false, 1),
  ('cotia', 'Itapecerica e Região', '600 Mega', '141,90', ARRAY['100% Fibra Óptica', 'WiFi-TOP', 'Instalação Facilitada', 'Sem Franquia de Dados'], true, 2);