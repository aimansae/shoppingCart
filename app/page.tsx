import Order from "./components/Order";

export default function page() {
  return (
    <section className="gap-2 container flex flex-col mx-auto p-4 md:p-0 bg-background">
      <h1 className="text-2xl font-bold">Desserts</h1>
      <div className="flex-1">
        <Order />
      </div>
    </section>
  );
}
