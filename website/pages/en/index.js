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
      <div className="section promoSection">
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
  <a href={booklet.url}>
    {booklet.name}
  </a>
)

class Index extends React.Component {
  render() {
    const {config} = this.props;
    const {booklets} = config;

    return (
      <div>
        <HomeSplash config={config}/>
        <div className="mainContainer" id="booklets">
          {booklets.map(b => (
            <Booklet key={b.name} booklet={b} />
          ))}
        </div>
      </div>
    );
  }
}

module.exports = Index;
