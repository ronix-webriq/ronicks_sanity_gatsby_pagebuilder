// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// exports.createPages = async ({graphql, actions}) => {
//     const {createPage} = actions
    
//   const result = await graphql(`
//     {
//       allSanityPages {
//         edges {
//           node {
//             slug {
//               current   
//             }
//           }
//         }
//       }
//     }
//     `);
  
//     if(result.errors) {
//       throw result.errors
//     }
  
//     const projects = result.data.allSanityPages.edges || []
//     console.log(projects)
//     projects.forEach((edge, index) => {
//         const path = `/LandingPage/${edge.node.slug.current}`;
//         console.log(edge)
//         // createPage({
//         //     path,
//         //     component: require.resolve()
//         // })
//     })
//   }