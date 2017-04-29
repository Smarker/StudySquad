import React from 'react';
import ReactPDF from 'react-pdf';
export default class PDFDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {total: 0, pageIndex: 0, pageNumber: 0, file: null};

    this.onDocumentLoad
    this.onFileChange = this.onFileChange.bind(this);
  }

  onFileChange(event) {
    this.setState({
      file: event.target.files[0],
    });
  }

  onDocumentLoad(total) {
      this.setState({total: total});
  }
  onPageLoad(pageIndex, pageNumber) {
      this.setState({pageIndex: pageIndex, pageNumber: pageNumber});
  }

  render() {
    return (
      <div>
        <label htmlFor="file">Load from file:</label>&nbsp;
            <input
              type="file"
              onChange={this.onFileChange}
            />
      <ReactPDF
        file="http://www.business.rutgers.edu/sites/default/files/user_files/mfina/campus-map.pdf"
      />
    
      </div>
    )
  }
}