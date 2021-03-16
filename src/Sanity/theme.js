import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import Hero from './Material UI/Hero/hero'
import MainNavigation from './Material UI/MainNavigation/mainNavigation'

export default function Theme() {
    

    return (
        <StaticQuery
        query={graphql`
            query themeQuery {
                allSanityPageBuilder {
                edges {
                    node {
                    themeName
                    pages {
                        page_name
                        pageSection {
                        page_sections {
                            pageSectionName
                            section {
                            ... on SanityTitle {
                                _key
                                displayTitle
                                headingStyle
                                style
                            }
                            ... on SanityParagraph {
                                _key
                                style
                                displayParagraph
                            }
                            ... on SanityImageElement {
                                _key
                                style
                                imageStyle
                                imageElement {
                                asset {
                                    url
                                }
                                }
                            }
                            ... on SanityButton {
                                _key
                                buttonColor
                                buttonName
                                style
                                btnLink {
                                slug {
                                    current
                                }
                                }
                            }
                            }
                        }
                        }
                    }
                    }
                }
                }
                allSanityThemes {
                edges {
                    node {
                    choosen_theme {
                        themeName
                    }
                    framework
                    }
                }
                }
            }
          
        `}
        render={data =>
            data.allSanityThemes.edges[0].node.choosen_theme !== null ?
            data.allSanityPageBuilder.edges.map((theme) => 
                theme.node.themeName === data.allSanityThemes.edges[0].node.choosen_theme.themeName && data.allSanityThemes.edges[0].node.framework === 'material_ui' ?
                    theme.node.pages.length !== 0 && theme.node.pages[0] !== null  ?
                    theme.node.pages[0].page_name === 'Home' || theme.node.pages[0].page_name === 'Landing Page' || theme.node.pages[0].page_name === 'Homepage'  ? 
                       theme.node.pages[0].pageSection.map(section =>
                            section.page_sections !== null ?
                                section.page_sections.pageSectionName === 'Main Navigation' ?
                                <MainNavigation key={section.page_sections.pageSectionName} data={section.page_sections.section} />
                                :  section.page_sections.pageSectionName === 'Hero Section' || section.page_sections.pageSectionName === 'Hero' ?
                                <Hero  key={section.page_sections.pageSectionName} data={section} />
                                : null
                           :null
                        )
                    :null
                :null
            :null
            ) :null
        }
    />
    )
}
