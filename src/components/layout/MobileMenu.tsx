"use client";

import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";
import { business, navItems } from "@/data/business";
import { services } from "@/data/services";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-900 hover:bg-silver-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:hidden"
        aria-label="Open navigation menu"
      >
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-50 lg:hidden">
        <div className="fixed inset-0 bg-navy-950/45" aria-hidden="true" />
        <div className="fixed inset-y-0 right-0 flex w-full justify-end">
          <DialogPanel className="flex h-full w-full max-w-sm flex-col bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <DialogTitle className="font-display text-2xl font-semibold text-navy-950">
                {business.name}
              </DialogTitle>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-navy-900 hover:bg-silver-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                aria-label="Close navigation menu"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="mt-8 grid gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-navy-900 hover:bg-silver-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 border-t border-navy-900/10 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
                Services
              </p>
              <div className="mt-3 grid gap-2">
                {services.slice(0, 5).map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setOpen(false)}
                    className="text-sm font-semibold text-navy-900 hover:text-blue-700"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-auto grid gap-3 pt-8">
              <Link
                href={business.phoneHref}
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white"
              >
                Call {business.ownerName}
              </Link>
              <Link
                href={business.facebookUrl}
                className="text-center text-sm font-semibold text-blue-700"
              >
                Facebook
              </Link>
              <p className="text-center text-xs font-semibold uppercase tracking-wide text-muted">
                NSW Licence {business.licenceNumber}
              </p>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-navy-800/15 px-5 py-3 text-sm font-semibold text-navy-900"
              >
                Request a Quote
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
