import ProductCategoryCardClient from "./client/ProductCategoryCardClient";

interface ProductCategoryCardProps {
  imgURL: string;
  name: string;
  description: string;
}

const ProductCategoryCard = (props: ProductCategoryCardProps) => {
  return <ProductCategoryCardClient {...props} />;
};

export default ProductCategoryCard;