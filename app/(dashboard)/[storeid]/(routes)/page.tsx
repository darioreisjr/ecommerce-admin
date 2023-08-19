import prismadb from "@/lib/prismadb";

interface IDashboardPageProps {
  params: { storeid: string }
};

const DashboardPage: React.FC<IDashboardPageProps> = async ({
  params
}) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params?.storeid,
    }
  })
  return (
    <div>
      Loja ativa: {store?.name}
    </div>
  );
}

export default DashboardPage;