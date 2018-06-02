class Test extends React.Component {
  constructor(props) {
    super(props);
    // this.display = display,
    this.state = {
      running: false
    };
    this.kki = {
      jjk: this.props.width + 5,
      asdf: this.props.height + 5
    };
  }

  dodaj() {
    this.props.width += 2;
    this.props.height += 2;
  }

  render() {
    /*
    $('tu').text("Duże KKI");
    console.log($doc);
    console.log(this.props);
    var tu = document.getElementById('tu');
    tu.innerText = "JS kki";
    var klasa = document.getElementsByClassName('klasa');
    klasa[0].inerText = "JS klasa";
    klasa[0].inerHtml = "JS klasa";
    var selektor = document.querySelector(".stopwatch");
    selektor.innerText = "KKI selektor";
    console.log(selektor);
    */
    return React.createElement(
      "div",
      { className: "test" },
      this.props.width,
      " ,",
      this.props.height,
      " ,",
      this.kki.asdf,
      " ,",
      this.kki.asdf,
      " ,"
    );
  }
}

Test.defaultProps = {
  width: 400,
  height: 320
};
Test.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired
};