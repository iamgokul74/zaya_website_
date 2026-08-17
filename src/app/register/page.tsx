import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/ui/Container";
import { RegistrationShell } from "@/components/register/RegistrationShell";

export const metadata: Metadata = {
  title: "Register — ZAYATHON '26",
  description:
    "Official Registration Command Center for ZAYATHON '26 by ZAYA CODE HUB. Register your squad and enter the signal network.",
};

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen relative z-10">
        <Container showMarkers>
          <RegistrationShell />
        </Container>
      </main>
    </>
  );
}
