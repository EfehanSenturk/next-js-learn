import React from "react";

const ShopDetailsPage = async ({ params }: { params: string }) => {
  const { slug } = await params;
  return <div>{slug}</div>;
};

export default ShopDetailsPage;
