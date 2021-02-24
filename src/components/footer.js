import React from "react"

const Footer = () => {
  return (
    <footer style={{ fontSize: '12px', position: 'absolute', bottom: '0', backgroundColor: '#e9e9e9', height: '60px' }}>
      <div style={{ fontWeight: '600', float: 'left' }}>Follow me in </div>
      <a href='https://github.com/Ho-s'>
        <div style={{ margin: '0 2px 0px 20px', float: 'left', width: '15px', height: '15px', backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/103414512-a1304a80-4bc1-11eb-93ee-b4bd31af9e57.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></div>
        <div style={{ fontWeight: '600', color: 'black', float: 'left' }}>Github</div>
      </a>
      <a href='mailto:kjcoco13@gmail.com'>
        <div style={{ margin: '0 2px 0px 20px', float: 'left', width: '15px', height: '15px', backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/103415271-bd81b680-4bc4-11eb-8ddc-08f84d52f406.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></div>
        <div style={{ fontWeight: '600', color: 'black', float: 'left' }}>Gmail</div>
      </a>
      <a href='https://www.facebook.com/byungho.joo.5/'>
        <div style={{ margin: '0 2px 0px 20px', float: 'left', width: '15px', height: '15px', backgroundImage: 'url(https://user-images.githubusercontent.com/71132893/104439445-76d48900-55d4-11eb-823e-5d1d60b92497.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain' }}></div>
        <div style={{ fontWeight: '600', color: 'black', float: 'left' }}>Facebook</div>
      </a>
      <div style={{ marginTop: '30px' }}>© 2021 Ho' Space. Powered by graphql & Gatsby.</div>
    </footer>
  )
}

export default Footer
