import { gql } from '@apollo/client'

export const PopupQuery = gql`
  query Popup {
    popup(where: { id: "cma2h4pa5bk6m08ld6rsv9yff" }) {
      title
      content {
        raw
        text
        html
      }
    }
  }
`

export const AboutUsQuery = gql`
  query AboutUs {
    aboutUs(where: { id: "cm9h3cqn823sm06l1ylm4qzk1" }) {
      name
      text {
        raw
      }
      text2 {
        raw
      }
      images {
        fileName
        url
      }
    }
  }
`

export const ShowroomBenefitsQuery = gql`
  query ShowroomBenefits {
    showroomBenefits {
      title
      text {
        text
      }
    }
  }
`

export const CategoriesQuery = gql`
  query Categories {
    categories {
      id
      createdAt
      categoryName
      categoryUrlName
      categoryImg {
        id
        url(transformation: { document: { output: { format: autoImage } } })
        width
        height
      }
    }
  }
`

export const CategoryQuery = gql`
  query Category($categoryInput: CategoryWhereUniqueInput!) {
    category(where: $categoryInput) {
      id
      createdAt
      categoryName
      categoryUrlName
      categoryImg {
        id
        url
        width
        height
      }
      product(first: 100) {
        id
        productImage {
          url(transformation: { document: { output: { format: autoImage } } })
          id
          fileName
        }
        productImageHover {
          url(transformation: { document: { output: { format: autoImage } } })
          id
          fileName
        }
        itemUrlSlug
        productName
        stage
        publishedAt
      }
    }
  }
`

export const ProductsQuery = gql`
  query Products {
    products(first: 100) {
      id
      productImage {
        url(transformation: { document: { output: { format: autoImage } } })
        id
        fileName
      }
      productImageHover {
        url(transformation: { document: { output: { format: autoImage } } })
        id
        fileName
      }
      carouselImage {
        url(transformation: { document: { output: { format: autoImage } } })
        id
        fileName
      }
      carouselImageHover {
        url(transformation: { document: { output: { format: autoImage } } })
        id
        fileName
      }
      itemUrlSlug
      productName
      stage
      publishedAt
    }
  }
`

export const ProductQuery = gql`
  query Product($productInput: ProductWhereUniqueInput!) {
    product(where: $productInput) {
      productImage {
        url(transformation: { document: { output: { format: autoImage } } })
        id
        fileName
      }
      productImageHover {
        url(transformation: { document: { output: { format: autoImage } } })
        id
        fileName
      }
      carouselImage {
        url(transformation: { document: { output: { format: autoImage } } })
        id
        fileName
      }
      carouselImageHover {
        url(transformation: { document: { output: { format: autoImage } } })
        id
        fileName
      }
      images(first: 100) {
        id
        src: url(transformation: { document: { output: { format: autoImage } } })
        width
        height
      }
      price
      subtitle
      techSpec {
        html
        markdown
        text
        raw
      }
      description {
        text
        html
        raw
      }
      itemUrlSlug
      productName
      stage
      publishedAt
      category {
        id
        categoryName
        categoryUrlName
      }
    }
  }
`

export const CustomImageQuery = gql`
  query CustomImages($name: String!) {
    customImage(where: { name: $name }) {
      id
      name
      images {
        id
        url(transformation: { document: { output: { format: autoImage } } })
        fileName
      }
    }
  }
`
export const CustomImageResizedQuery = gql`
  query CustomImages($name: String!) {
    customImage(where: { name: $name }) {
      id
      name
      images {
        id
        url(
          transformation: {
            image: { quality: { value: 90 }, resize: { width: 1200, height: 800, fit: clip } }
            document: { output: { format: autoImage } }
          }
        )
        fileName
      }
    }
  }
`

export const CreateContactMutation = gql`
  mutation CreateContactData($data: ContactFormDataCreateInput!) {
    createContactFormData(data: $data) {
      id
      email
      phone
      publishedAt
      createdAt
    }
  }
`

export const CreateNewsletterContactMutation = gql`
  mutation AddNewsletterEmail($data: NewsletterContactCreateInput!) {
    createNewsletterContact(data: $data) {
      id
      email
    }
  }
`
