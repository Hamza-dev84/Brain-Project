import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { AvailabilityCheckerModal } from './AvailabilityCheckerModal';

export type SignupPrefill = {
  serviceType?: 'home' | 'business';
  packageLabel?: string;
};

type SignupModalContextValue = {
  openSignup: (prefill?: SignupPrefill) => void;
};

const SignupModalContext = createContext<SignupModalContextValue | null>(null);

/**
 * Provides a single shared "Get connected" planner modal for the whole
 * BrainNET (internet) brand area, so any card / CTA can open it.
 */
export const SignupModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [prefill, setPrefill] = useState<SignupPrefill | undefined>(undefined);

  const openSignup = useCallback((next?: SignupPrefill) => {
    setPrefill(next);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openSignup }), [openSignup]);

  return (
    <SignupModalContext.Provider value={value}>
      {children}
      <AvailabilityCheckerModal open={open} onOpenChange={setOpen} prefill={prefill} />
    </SignupModalContext.Provider>
  );
};

/**
 * Safe outside the provider: falls back to a no-op-free direct link behaviour
 * by returning a function that sends the user to the contact page.
 */
export const useSignupModal = (): SignupModalContextValue => {
  const ctx = useContext(SignupModalContext);
  if (ctx) return ctx;
  return {
    openSignup: () => {
      if (typeof window !== 'undefined') {
        window.location.assign('/services/internet/contact-us');
      }
    },
  };
};
