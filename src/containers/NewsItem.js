import React from 'react';
import { connect } from 'react-redux'


const imgStyle = {
  hight: 'auto',
  width: '80%',
  border: '4px solid RebeccaPurple ',
  borderRadius: '5%'
};
const articleStyle = {
  width: '50%',
  margin: '0 auto',
  color: 'olive'
}
const errorMessage = {
  color: 'red'
}

let NewsItem = ({ article }) => {
  return (
  article ?
    article.map((data,i) => (<article key={i} style={articleStyle} >
      {/* {article.error && <h2 style={errorMessage}>{article.error}</h2>} */}
      {data.title && <div>
        <h1>{data.title}</h1>
        <img style={imgStyle} src={data.urlToImage} alt="" />
        <h2>{data.description}</h2>
        <a href={data.url} target="_blank">READ MORE</a>
      </div>}
    </article>)) :
    null
)};

const mapStateToProps = (state) => {
  return ({
  article: state.article,
})
}

NewsItem = connect(
  mapStateToProps,
  null
)(NewsItem)

export default NewsItem;