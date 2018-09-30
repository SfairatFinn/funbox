
class Card extends React.Component {
  constructor() {
    super();
    this.state={color_blue: true, color_red: true, slogan_val: "Сказачное заморское яство", color:"#666"};
  }

  changeColor(){
        this.setState({color_blue: !this.state.color_blue})
    }
  
  hoverChangeColor(){
        this.setState({color_red: !this.state.color_red})
    }

  changeSloganOut(){
     if(!this.state.color_blue){
        this.setState({slogan_val: "Котэ не одобряет?", color:"#e62e7a"})
     }
  }
  changeSloganOver(){
     if(!this.state.color_blue){
        this.setState({slogan_val: "Сказачное заморское яство", color:"#666"})
     }
  }

    


  render() {
    

    let bgColorSelect = this.state.color_blue ? "#1698d9" : "#d91667"
    let bgColorHover = this.state.color_blue ? "#d91667" : "#e62e7a"
    
    const packDescEnable = this.state.color_blue ? "Чего сидишь? Порадуй котэ, " : this.props.flavor_desc
    const packDesc = this.props.enabled == "true" ? packDescEnable : this.props.flavor_desc_disable

    const packDescLinkEnabled = this.state.color_blue ? "купи." : ""
    const packDescLink = this.props.enabled == "true" ? packDescLinkEnabled : ""

    const bgColorEnabled = this.props.enabled == "true" ? bgColorSelect : "#b3b3b3"

    const sloganColor = this.props.enabled == "true" ? this.state.color : "#b3b3b3" 
    const titleColor = this.props.enabled == "true" ? "#000 !important" : "#b3b3b3" 
    const flavorColor = this.props.enabled == "true" ? "#000" : "#b3b3b3"
    const featureColor = this.props.enabled == "true" ? "#666" : "#b3b3b3"

    const fotoColor = this.props.enabled == "true" ? "1" : "0.5"

    const stateColor = this.props.enabled == "true" ? "#fff" : "#ffff66"
   
    const eventCardClick = this.props.enabled == "true" ? this.changeColor.bind(this) : "JavaScript: return false;"

    return (
     <div className="item_column">
                    <div className="item_container" style={{backgroundColor: bgColorEnabled}}  onClick={eventCardClick}  onMouseOut={this.changeSloganOut.bind(this)} onMouseOver={this.changeSloganOver.bind(this)} >
                     <div className="item_image" style={{opacity:fotoColor}}></div>
                     <div className="item_slogan" style={{color: sloganColor}}><p>{this.state.slogan_val}</p></div>
                     <div className="item_title"><p style={{color: titleColor}}>Нямушка</p></div>
                     <div className="item_flavor" style={{color: flavorColor}}>
                        <div className="item_flavour_cont"><p>{this.props.flavor}</p></div>
                      </div>
                      <div className="item_feature" style={{color: featureColor}}>
                       <div className="item_feature_cont">
                        <div><strong>{this.props.quantity}</strong> порций</div>
                        <div><strong>{this.props.gift}</strong>{this.props.gift_desc}</div>
                        <div>{this.props.description}</div>
                       </div> 
                      </div>
                     <div className="item_circle" style={{backgroundColor: bgColorEnabled}}></div>
                     <div className="item_weight">
                       <span className="item_weight_num">{this.props.weight}</span>
                       <span className="item_weight_sym">кг</span>
                     </div>
                    </div>
                    <div className="item_state" style={{color:stateColor}}>{packDesc}<span  onClick={this.changeColor.bind(this)}>{packDescLink}</span></div>
                   </div>);
  }
}


class App extends React.Component {
    constructor() {
      super();
    }

   

    render() {
        return <div>
                 <div className="header row">
                  <div className="col-lg-12">
                    <h1>Ты сегодня покормил кота?</h1>
                  </div>
                </div>
                <div className="content row justify-content-center">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 item item-first">
                   <Card flavor="с фуа-гра" quantity="10" gift="" gift_desc="мышь в подарок" description="" weight="0,5" flavor_desc="Печень утки разварная с артишоками." flavor_desc_disable="Печалька, с фуа-гра закончился"  enabled="false"/>             
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 item item-second">
                  <Card flavor="с рыбой" quantity="40" gift="2" gift_desc=" мыши в подарок" description="" weight="2" flavor_desc="Головы щучьи с чесноком да свежайшая сёмгушка." flavor_desc_disable="Печалька, с рыбой закончился" enabled="true"/>
                   </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 item item-third">
                   <Card flavor="с курой" quantity="100" gift="5" gift_desc=" мышей в подарок" description="заказчик доволен" weight="5" flavor_desc="Филе из цыплят с трюфелями в бульоне." flavor_desc_disable="Печалька, с курой закончился" enabled="true"/>
                  </div>
                </div>
                </div>;
                  
    }
}


ReactDOM.render(
    <App/>,  
    document.getElementById("app")
)