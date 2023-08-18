import prismadb from "@/lib/prismadb";

interface IDashboardPageProps {
  params: { storeId: string }
};

const DashboardPage: React.FC<IDashboardPageProps> = async ({
  params
}) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params?.storeId,
    }
  })
  return (
    <div>
      Loja ativa: {store?.name}
    </div>
  );
}

export default DashboardPage;