const AdminProductsPage = async (props: {
  searchParams: Promise<{ page: string; query: string; category: string }>;
}) => {
  const searchParams = await props.searchParams;

  const page = Number(searchParams.page) || 1;
  const searchText = searchParams.query || "";
  const category = searchParams.category || "";

  return (
    <div className="space-y-2">
      <div className="flex-betwee">
        <h1 className="h2-bold">Products</h1>
      </div>
    </div>
  );
};

export default AdminProductsPage;
