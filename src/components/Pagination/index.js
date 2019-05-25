import React, { Component } from "react";
import "./pagination.scss";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currentPage || 1
    };
  }

  getData(page) {
    let { getData } = this.props;
    this.setState({ currentPage: page });
    getData(page);
  }

  fill(from, to) {
    let arr = [];
    for (let i = from; i <= to; i++) {
      arr.push(i)
    }
    return arr;
  }

  render() {
    const { totalPages } = this.props;
    const { currentPage } = this.state;
    const numPageShow = 2;

    const tmpArr1 = this.fill(1, currentPage).slice(numPageShow * -1 -1);
    const tmpArr2 = this.fill(currentPage + 1, totalPages).slice(0, numPageShow);
    const finalArr = tmpArr1.concat(tmpArr2);

    if (finalArr.length > 0 && finalArr[finalArr.length - 1] < totalPages) {
      if (finalArr[finalArr.length - 1] + 1 < totalPages) {
        finalArr.push('DOT')
      }
      finalArr.push(totalPages)
    }
    
    let items = finalArr.map((page, index) => {
      if (page === 'DOT') {
        return (<li key={`pagination_${page}`}><span>...</span></li>);
      }
      if (totalPages <= 1) {
        return null;
      }
      return (
        <li
          key={`pagination_${page}`}
          className={currentPage === page ? 'active' : ''}
          onClick={() => this.getData(page)}
        >
          <span>{page}</span>
        </li>
      );
    })

    let prevLink = '', nextLink = '', firstLink = '', lastLink = '';

    if (totalPages > 1) {
      firstLink = (
        <li
          key='pagination_firstLink'
          className={ (currentPage - 1 >= 1) ? '' : 'disabled'}
          onClick={() => this.getData(1)}
        >
          <span>Newer</span>
        </li>);
      prevLink = (
        <li
          key='pagination_prevLink'
          className={ (currentPage - 1 >= 1) ? '' : 'disabled'}
          onClick={() => this.getData(currentPage - 1)}
        >
          <span>Prev</span>
        </li>);
      nextLink = (
        <li
          key='pagination_nextLink'
          className={(currentPage + 1 <= totalPages) ? '' : 'disabled'}
          onClick={() => this.getData(currentPage + 1)}
        >
          <span>Next</span>
        </li>);
      lastLink = (
        <li
          key='pagination_lastLink'
          className={(currentPage + 1 <= totalPages) ? '' : 'disabled'}
          onClick={() => this.getData(totalPages)}
        >
          <span>Older</span>
        </li>);
    }

    return (
      <div className='pagination'>
        <ul>
          {firstLink}
          {prevLink}
          {items}
          {nextLink}
          {lastLink}
        </ul>
      </div>
    );
  }
}

export default Pagination;
