import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"



export default function SingleProductPage() {
    return (
        <div className={styles.container}>

            <div className={styles.infoContainer}>
                <div className="imgContainer">
                    <img src="/profil.png" alt="user" width={200} height={200} />

                </div>
                Iphone
            </div>

            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label htmlFor="">Title</label>
                    <input type="text" placeholder='hello' />
                    <label htmlFor="">Price</label>
                    <input type="number" name='price' placeholder='steelgrou03@gmail.com' />
                    <label htmlFor="">Stock</label>
                    <input type="number" name='stock' placeholder='23' />
                    <label htmlFor="">Color</label>
                    <input type="text" placeholder='red' />
                    <label htmlFor="">Size</label>
                    <textarea type="text" placeholder='New York'></textarea>
                    <label htmlFor="">Cat</label>
                    <select name="cat" id="cat">
                        <option value={false} selected>Kitchen</option>
                        <option value={true}></option>
                    </select>
                    <label htmlFor="">Description</label>

                    <textarea name="desc"
                        id="desc"
                        cols="30"
                        rows="10"
                        placeholder='description'
                    ></textarea>

                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}
