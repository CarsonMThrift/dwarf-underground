import React, { Component } from 'react'
import ArticleTitle from './ArticleTitle'
import AuthorInfo from './AuthorInfo'
import MainBody from './MainBody'


class Article extends Component {

    render() {

        return (

        <div>
            
            <ArticleTitle />

            <AuthorInfo />

            <MainBody />

        </div>

        )

    }

}

export default Article
