const React = require('react');
class HomeSplash extends React.Component {
  render() {
  const {config} = this.props;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const PromoSection = props => (
      <div className="section promoSection" id="booklets">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
        <h2 className="projectTitle">
          {config.title}
          <small>{config.tagline}</small>
        </h2>
          <PromoSection>
            <Button href="#booklets"> 📒 کتابچه‌ها </Button>
            <Button href="https://github.com/TrueMoein/JSBooklet/" target="_blank">گیت‌هاب</Button>
            <Button href="/contribution"> 🤝 مشارکت </Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Booklet = ({booklet}) => (
  <div className="col-xs-6 col-md-3 col-lg-3 booklet-flex-box">
    <a
      href={booklet.url}
      style={{backgroundImage: `url(${booklet.image})`}}
      className="booklet-image-link"
    >
    </a>
  </div>
)

class Index extends React.Component {
  render() {
    const {config} = this.props;
    const {booklets} = config;

    return (
      <div>
        <HomeSplash config={config}/>
        <div className="mainContainer">
          <div className="wrapper">
            <div className="row">
              {booklets.map(b => (
                <Booklet key={b.name} booklet={b} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
