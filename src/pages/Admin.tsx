import { FormEvent, useEffect, useMemo, useState } from "react";
import { ArrowLeft, LogOut, Save, ShieldCheck } from "lucide-react";
import { Session } from "@supabase/supabase-js";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { REGIONS, RegionGroup } from "@/data/siteData";
import { supabase } from "@/integrations/supabase/client";

type PlanRow = {
  id: string;
  region_key: string;
  region_label: string;
  speed: string;
  price: string;
  features: string[];
  popular: boolean;
  display_order: number;
};

const pricePattern = /^\d{1,4},\d{2}$/;

export default function Admin() {
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [plans, setPlans] = useState<PlanRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingId, setSavingId] = useState<string | null>(null);

  const groupedPlans = useMemo(
    () =>
      (Object.keys(REGIONS) as RegionGroup[]).map((key) => ({
        key,
        label: REGIONS[key].label,
        plans: plans.filter((plan) => plan.region_key === key),
      })),
    [plans],
  );

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession);
      if (newSession) {
        setTimeout(() => {
          claimFirstAdmin(newSession.user.id);
          loadPlans();
        }, 0);
      }
    });

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      if (data.session) {
        claimFirstAdmin(data.session.user.id);
        loadPlans();
      } else {
        setLoading(false);
      }
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const claimFirstAdmin = async (userId: string) => {
    await supabase.from("user_roles").insert({ user_id: userId, role: "admin" });
  };

  const loadPlans = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("plan_prices")
      .select("id, region_key, region_label, speed, price, features, popular, display_order")
      .order("region_key", { ascending: true })
      .order("display_order", { ascending: true });

    if (error) {
      toast.error("Não foi possível carregar os planos.");
    } else {
      setPlans(data ?? []);
    }

    setLoading(false);
  };

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      toast.error("E-mail ou senha inválidos.");
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    if (!email || password.length < 6) {
      toast.error("Informe e-mail e senha com no mínimo 6 caracteres.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin + "/admin" },
    });

    if (error) {
      toast.error("Não foi possível criar o acesso.");
    } else {
      toast.success("Acesso criado. Confirme seu e-mail para entrar.");
    }
    setLoading(false);
  };

  const updatePlan = (id: string, field: keyof PlanRow, value: string | boolean | string[]) => {
    setPlans((current) => current.map((plan) => (plan.id === id ? { ...plan, [field]: value } : plan)));
  };

  const savePlan = async (plan: PlanRow) => {
    if (!pricePattern.test(plan.price.trim())) {
      toast.error("Use o formato 101,90 no preço.");
      return;
    }

    setSavingId(plan.id);
    const { error } = await supabase
      .from("plan_prices")
      .update({
        price: plan.price.trim(),
        popular: plan.popular,
        features: plan.features.map((feature) => feature.trim()).filter(Boolean),
      })
      .eq("id", plan.id);

    if (error) {
      toast.error("Você precisa estar logado como administrador para salvar.");
    } else {
      toast.success("Plano atualizado no site.");
      loadPlans();
    }

    setSavingId(null);
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setPlans([]);
  };

  if (!session) {
    return (
      <main className="min-h-screen bg-background px-4 py-10 text-foreground">
        <div className="mx-auto flex w-full max-w-md flex-col gap-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Voltar ao site
          </Link>

          <Card>
            <CardHeader>
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <CardTitle>Administração</CardTitle>
              <CardDescription>Entre para alterar os valores exibidos nos planos.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <Input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <Button type="submit" disabled={loading}>Entrar</Button>
                  <Button type="button" variant="secondary" onClick={handleSignup} disabled={loading}>Criar acesso</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-10 text-foreground">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <header className="flex flex-col gap-4 border-b border-border pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <Link to="/" className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" /> Voltar ao site
            </Link>
            <h1 className="text-3xl font-extrabold">Planos e valores</h1>
            <p className="mt-1 text-muted-foreground">Altere preços, benefícios e destaque de venda.</p>
          </div>
          <Button variant="outline" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" /> Sair
          </Button>
        </header>

        {loading ? (
          <Card><CardContent className="p-6 text-muted-foreground">Carregando planos...</CardContent></Card>
        ) : (
          groupedPlans.map((group) => (
            <section key={group.key} className="space-y-4">
              <h2 className="text-xl font-bold">{group.label}</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {group.plans.map((plan) => (
                  <Card key={plan.id}>
                    <CardHeader>
                      <CardTitle>{plan.speed}</CardTitle>
                      <CardDescription>{plan.region_label}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor={`price-${plan.id}`}>Preço mensal</Label>
                        <Input id={`price-${plan.id}`} value={plan.price} onChange={(event) => updatePlan(plan.id, "price", event.target.value)} placeholder="101,90" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`features-${plan.id}`}>Benefícios</Label>
                        <Textarea
                          id={`features-${plan.id}`}
                          value={plan.features.join("\n")}
                          onChange={(event) => updatePlan(plan.id, "features", event.target.value.split("\n"))}
                          rows={5}
                        />
                      </div>
                      <div className="flex items-center justify-between rounded-md border border-border p-3">
                        <Label htmlFor={`popular-${plan.id}`} className="font-semibold">Mais vendido</Label>
                        <Switch id={`popular-${plan.id}`} checked={plan.popular} onCheckedChange={(checked) => updatePlan(plan.id, "popular", checked)} />
                      </div>
                      <Button className="w-full" onClick={() => savePlan(plan)} disabled={savingId === plan.id}>
                        <Save className="mr-2 h-4 w-4" /> Salvar alterações
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          ))
        )}
      </div>
    </main>
  );
}