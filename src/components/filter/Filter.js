import React, { Component } from 'react';



class Filter extends Component {


  

  render()
  {
    return (
      <div className="row">
        <div className="col-md-4">
            {this.props.count} Product Found
        </div>
        <div className="col-md-8">
            <label>Sort By</label>
            <select onChange={this.props.handleChangeSort} value={this.props.sort} className="form-control">
                <option value=""> Select </option>
                <option value="lowest"> Lowest To Heighest </option>
                <option value="heighest"> Heighest To Lowest </option>
            </select>
        </div>

        {/* <div className="col-md-4">
            <label>Filter By Size</label>
            <select onChange={this.props.handleChangeSize} value={this.props.size} className="form-control">
                <option value=""> All </option>
                <option value="xs"> XS </option>
                <option value="s"> S </option>
                <option value="m"> M </option>
                <option value="l"> L </option>
                <option value="xl"> XL </option>
                <option value="xxl"> XXL </option>
            </select>
        </div> */}


      </div>
    );
  }
  
}

export default Filter;
