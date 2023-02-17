import React from "react";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
{content:"asda"}
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "欢迎来到我的个人网站！我是S，一个热爱美食和摄影的人。"
        },
        {
          id: "second-p-about",
          content:
          "对于我来说，做饭是一种享受。我喜欢用各种食材和烹饪方法创造美味的菜肴，尤其是尝试不同的国际美食。我相信美食可以连接人与人之间的感情，也是一种享受生活的方式"
        },
        {
          id: "third-p-about",
          content:
          "同时，我也是一名摄影爱好者。我喜欢用相机记录生活中的美好瞬间和自然风光，尝试不同的拍摄技巧和风格。我认为摄影可以帮助我更好地观察世界，发现生活中的美好，同时也是一种表达自我的方式。"
        },
        {
          id: "fourth-p-about",
          content:
          "在这个个人网站上，你可以找到我分享的一些做饭和摄影的作品，也可以了解我生活中的一些趣事和见闻。希望通过这个网站，我们可以一起享受美食和美好的瞬间。"
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-12">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
