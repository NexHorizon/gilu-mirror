import { CategoryQuery, CategoriesQuery } from '@/queries/query'
import { getClient } from '@/utlis/ApolloClient'

export default async function sitemap() {
  const staticPages = [
    {
      url: 'https://www.gilu.cz',
    },
    {
      url: 'https://www.gilu.cz/kontakt',
    },
    {
      url: 'https://www.gilu.cz/showroom',
    },
  ]

  const categories = await getClient().query({
    query: CategoriesQuery,
  })

  let categoriesSitemap = categories.data.categories
    .filter((cat) => cat.categoryUrlName != null)
    .map((cat) => ({
      url: `https://www.gilu.cz/kategorie/${cat.categoryUrlName}`,
    }))

  let productsSitemap = categories.data.categories.map((cat) =>
    getClient()
      .query({
        query: CategoryQuery,
        variables: { categoryInput: { categoryUrlName: cat.categoryUrlName } },
      })
      .then((res) =>
        res.data.category.product
          .filter((prod) => prod.itemUrlSlug != null)
          .map((prod) => ({
            url: `https://www.gilu.cz/produkt-detail/${prod.itemUrlSlug}`,
          })),
      ),
  )

  let productsSitemap2 = await Promise.all(productsSitemap)

  return [...staticPages, ...categoriesSitemap, ...productsSitemap2.flat()]
}
