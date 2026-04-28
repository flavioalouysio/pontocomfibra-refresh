CREATE OR REPLACE FUNCTION public.can_claim_first_admin(_user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT NOT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE role = 'admin'
  )
  AND _user_id = auth.uid()
$$;

REVOKE ALL ON FUNCTION public.can_claim_first_admin(UUID) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.can_claim_first_admin(UUID) FROM anon;
REVOKE ALL ON FUNCTION public.can_claim_first_admin(UUID) FROM authenticated;

CREATE POLICY "First user can claim admin role"
ON public.user_roles
FOR INSERT
TO authenticated
WITH CHECK (role = 'admin' AND user_id = auth.uid() AND public.can_claim_first_admin(user_id));