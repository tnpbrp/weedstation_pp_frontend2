// import { Menu } from 'antd';
// import { MailOutlined } from '@ant-design/icons';
import logoWeedStaion from '../assets/images/Weed_Station.jpg';
import logoWeedStaion2 from '../assets/images/weedpp2.jpg';
import { Image } from 'antd';
// const { SubMenu } = Menu;

const navbarStyle = {
    backgroundColor: '#212529',
    // display: 'flex',
    // justifyContent: 'space-between',
    verticalAlign: "center",
    height: 'inherit',
    width: '100%',
};

const logoStyle = {
    width: '150px',
    maxWidth: '100%',
    height: "auto",

    // maxWidth: '150px',
    // borderRadius: '50%',
    // marginRight: '30px',
    // fontSize: '24px',
};


const frist_navStyle = {
    height: '55px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
};

const second_navStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#e3fcdc',
    width: '100%',
    border: '1px solid #A8A9AE',
};

const contactIcon_style = {
    fontSize: '25px',
    color: 'white',
    padding: '0 14px'
};



function Navbar() {
    return (
        <nav style={navbarStyle}>
            <div className='frist-nav' style={frist_navStyle}>
                {/* <Image src={logoWeedStaion2} style={logoStyleImg} loading="" /> */}
                <span style={{ fontSize: '22px', color: 'white',  }}>Weed Station P&P Shop 2</span>
                {/* <span>Lang. TH</span> */}
            </div>

            <div style={second_navStyle}>
                <Image src={logoWeedStaion2} alt="WeedStaionPP2" style={logoStyle} />

                <div className='clickContact'>
                    <span className='' style={{ ...contactIcon_style }}>
                        <a href="tel:0968292587" style={{ color: 'white' }}>
                            {/* 0968292587, 0909929671 */}
                            <i className="fas fa-phone" style={{ color: 'black' }}></i>
                        </a>
                    </span>
                    <span className='' style={{ ...contactIcon_style }}>
                        <a href="https://line.me/ti/p/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                            {/* https://line.me/ti/p/9P3vcSl0BF */}
                            {/* update line 2 */}
                            <i className="fa-brands fa-line" style={{ color: '#39CD00', backgroundColor: 'transparent', }}></i>
                        </a>
                    </span>
                    <span className='' style={{ ...contactIcon_style }}>
                        <a href="https://maps.app.goo.gl/ThdR1xqzLDA5hjsj6" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                            {/* <i className="fa-brands fa-google" style={{ color: '#FF5722', backgroundColor: 'transparent' }}></i> */}
                            <i className="fas fa-map-marker-alt" style={{ color: 'blue', backgroundColor: 'transparent' }} ></i>
                        </a>
                    </span>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;