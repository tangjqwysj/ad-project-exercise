import React from 'react';
import { Carousel } from 'antd';
import {
    newsData1, newsData2, newsData3, newsData4,
} from 'common/constants/news';
import NewsItem from './NewItem';
import './index.scss';

interface IProps { }
interface IStates { }

class ProductNews extends React.Component<IProps, IStates>{
render() {
   return (
      <div className="product-news-component-box">
         <Carousel>
            <NewsItem newsData={newsData1}/>
            <NewsItem newsData={newsData2}/>
            <NewsItem newsData={newsData3}/>
            <NewsItem newsData={newsData4}/>
         </Carousel>
      </div>
   )
}
}

export default ProductNews;