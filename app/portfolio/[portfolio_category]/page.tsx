import { redirect } from "next/navigation";

// components
import Gallery from "../../components/portfolio/Gallery";
import PortfolioNav from "@/app/components/portfolio/PortfolioNav";

import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  {
    params,
  }: {
    params: { portfolio_category: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const activeCategory = params.portfolio_category;

  const categoryName =
    activeCategory === "real-estate"
      ? "Nieruchomości - portfolio prac"
      : activeCategory === "events"
      ? "Wydarzenia - portfolio prac"
      : activeCategory === "all"
      ? "Portfolio wszystkich prac"
      : activeCategory === "artistic"
      ? "Artystyczne - portfolio prac"
      : "";

  const title = "Drone Cone | " + categoryName;
  const url = "https://dronecone.pl/portfolio/" + activeCategory;

  let description = "";

  if (activeCategory === "real-estate") {
    description =
      "Zbiór naszych zdjęć i filmów nieruchomości, zobacz nasze dotychczasowe zdjęcia, obejrzyj nasze filmy";
  } else if (activeCategory === "events") {
    description =
      "Zbiór naszych zdjęć i filmów wydarzeń, zobacz nasze dotychczasowe zdjęcia, obejrzyj nasze filmy";
  } else if (activeCategory === "all") {
    description =
      "Zbiór wszystkich naszych zdjęć i filmów, nieruchomości, wydarzenia, artystyczne, zobacz nasze dotychczasowe zdjęcia, obejrzyj nasze filmy";
  } else if (activeCategory === "artistic") {
    description =
      "Zbiór naszych zdjęć i filmów z podróży i nie tylko, zobacz nasze dotychczasowe zdjęcia, obejrzyj nasze filmy";
  }

  return {
    title: title,
    description: description,
    viewport: "width=device-width, initial-scale=1.0",
    openGraph: {
      title: title,
      description: description,
      url: url,
      images: ["https://dronecone.pl/BanerCanva.png"],
    },
  };
}

export default function PortfolioCategories({
  params,
}: {
  params: { portfolio_category: string };
}) {
  const activeCategory = params.portfolio_category;

  if (
    activeCategory !== "all" &&
    activeCategory !== "artistic" &&
    activeCategory !== "real-estate" &&
    activeCategory !== "events"
  ) {
    redirect("/portoflio/all");
  }

  return (
    <main className="w-screen overflow-hidden">
      <PortfolioNav activeCategory={activeCategory} />
      <Gallery activeCategory={activeCategory} />
    </main>
  );
}
