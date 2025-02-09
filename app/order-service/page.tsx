import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Cone | Zamów usługę",
  description:
    "Zamów usługę latania dronem, filmy i zdjęcia nieruchmości, wydarzeń, wycena, kontakt",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Drone Cone | Zamów usługę",
    description:
      "Zamów usługę latania dronem, filmy i zdjęcia nieruchmości, wydarzeń, wycena, kontakt",
    url: "https://dronecone.pl/order-service",
    images: ["https://dronecone.pl/BanerCanva.png"],
  },
};

// components
import OrderServiceCards from "../components/order-service/OrderServiceCards";
import OrderServiceForm from "../components/order-service/OrderServiceForm";

export default function OrderService() {
  return (
    <main className="w-screen overflow-hidden">
      <OrderServiceCards />
      <OrderServiceForm />
    </main>
  );
}
