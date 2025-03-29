import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Search from "@/app/ui/dashboard/search/search";
import Link from "next/link";
import styles from "@/app/ui/dashboard/products/products.module.css";
import { fetchProducts } from "@/app/lib/data";

export default async function ProductsPage({ searchParams }) {
  const q = searchParams?.q || "";
  const page = parseInt(searchParams?.page, 10) || 1;
  const { count, products } = await fetchProducts(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product ..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className={styles.product}>
                  <img 
                    src={product.img || "/iphone.webp"} 
                    alt={product.title}
                    width={40} 
                    height={40} 
                    className={styles.productImage} 
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc || "No description"}</td>
              <td>${product.price}</td>
              <td>{product.createdAt ? new Date(product.createdAt).toLocaleDateString() : "N/A"}</td>
              <td>{product.stock}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination count={count} />
    </div>
  );
}
