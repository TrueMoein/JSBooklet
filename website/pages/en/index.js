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
        <div className="goal-section">
          <div className="wrapper">
            <div className="row">
              <div className="col-md-7 col-xs-12 goal-text">
                <h1>هدف</h1>
                <p>
                    این روزها جاوااسکریپت به معروف‌ترین و پرکاربردترین زبان برنامه نویسی تبدیل شده.
                    تقریبا هیچ کاری نیست که با این زبان نشه انجام داد.
                    آقای <a href="https://en.wikipedia.org/wiki/Jeff_Atwood" target="_blank">Jeff Atwood</a> گفته "هر برنامه ای که بتوان با جاوااسکریپت نوشت، در نهایت با جاوااسکریپت نوشته خواهد شد."
                </p>
              </div>
              <div className="col-md-5 col-xs-12 booklet-image hide-xs">
                <img width="210" src="/img/booklets/JS-Book.png" alt="JSBooklet - کتابچه آموزش جاوااسکریپت" />
              </div>
            </div>
          </div>
        </div>
          <div className="wrapper" id="booklets">
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
