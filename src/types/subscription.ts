export interface Subscription {
  id: string;
  user_id: string;
  tier: 'free' | 'pro' | 'enterprise';
  status: 'active' | 'cancelled' | 'past_due' | 'incomplete';
  current_period_start: string;
  current_period_end: string;
  cancel_at_period_end: boolean;
  created_at: string;
  updated_at: string;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'bank_account';
  last_four: string;
  brand?: string;
  exp_month?: number;
  exp_year?: number;
  is_default: boolean;
}

export interface Invoice {
  id: string;
  subscription_id: string;
  amount: number;
  currency: string;
  status: 'paid' | 'pending' | 'failed';
  due_date: string;
  paid_at: string | null;
  invoice_url: string;
  created_at: string;
}

export interface UsageMetrics {
  api_calls: number;
  storage_used: number;
  bandwidth_used: number;
  period_start: string;
  period_end: string;
  limits: {
    api_calls: number;
    storage: number;
    bandwidth: number;
  };
}

export interface BillingDetails {
  subscription: Subscription;
  payment_method: PaymentMethod;
  upcoming_invoice: Invoice | null;
  usage_metrics: UsageMetrics;
};