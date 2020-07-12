import ProductsDB from '@/firebase/products-db'
import UserDB from '@/firebase/user-db'
//const @blob => { 'User/Product/cache' }
//import @blob from '../firebase/storage/User_id/product_blobs/cache'

export default {
    // Adjust to get a selection of products
    //(12 products from the database)
    // Fetch products if current is logged_in user
    getUserProducts: async({ rootState, userLoggedIn }) => {
        // for 1st time visitors get random 12; and cache them for returns
        const userProductDb = new UserProductsDB(rootState.authentication.user.id)
        const products = await userProductDb.readAll()
        commit('setProducts', products)
    },


    // search a product for current logged in user as required //
    // count +=1 per each sucessful search //
    // Offer an append to cart or watch list for each, search made //
    // cache searches to the users account id, display these when user //
    // returns to the site | when user Logs in next()


    createUserProductsList: async({ commit, rootState }, product) => {
        // UserProductList to be generated and cached, for rendering on next login. 
        // InitialProductList to be pulled from db (12 at random); If no subscription or 
        // search queries are made during the visit | cache the set to cloudstorage, for rendering; 
        // For cached content/products, append to a marketing email, for curtisy reminder!!
        // For each users, analytics, in search; create a user products set for emailing and cached 
        // rendering from cloud storage to users home page on return visit  
        const userProductCache = new UserProductsList(rootState.authentication.user.id)
            // when random list is pulled | when a search is made; render the product to the client
            // and return a "userProductCache" which will assign or append to a "new UserProductsList" 
            // append a datetime.now to the cache and a token(for ananlytics/marketing)

        //When a user account is created, Initialize a UsersProfileData
        //  & Product Cache for deep link marketing and globally explicit patterns 

        // commit('setProductCreationPending', true)
        // const createdProduct = await userProductDb.create(product)
        // commit('addProduct', createdProduct)
        // commit('setProductCreationPending', false)
    },


    // Create a new product
    for current loggedin user and reset product name input *

    getProductAction: ({ dispatch, state, commit }) => {
        if (state.productNameToCreate === '') return
        const product = { name: state.productCodeToSearch }
        commit('setProductNameToSearch', '')
        dispatch('createUserProduct', product)
    },

    /**
     * Delete a user product from its id
     */
    //     deleteUserProduct: async({ rootState, commit, getters }, productId) => {
    //         if (getters.isProductDeletionPending(productId)) return

    //         const userProductsDb = new UserProductsDB(rootState.authentication.user.id)

    //         commit('addProductDeletionPending', productId)
    //         await userProductsDb.delete(productId)
    //         commit('removeProductById', productId)
    //         commit('removeProductDeletionPending', productId)
    //     }
    // }