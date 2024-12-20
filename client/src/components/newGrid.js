// import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
// import Clock from './clock';
// import CarouselFadeExample from './carousel';
// import ZmaneiHayom from './ZmaneiHayom';
// import Row from 'react-bootstrap/esm/Row';
// import Col from 'react-bootstrap/esm/Col';
// import { Container } from '@mui/material';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function ResponsiveGrid() {
//   return (
    
// <Container style={{backgroundColor:"#FFDEAD" ,width:"100%"}}>
// <h1  style={{marginRight:"50px"}} ><Clock /></h1>
//       <Row style={{height:"700px"}}>
//         <Col style={{border:"1px solid black",height:"700px",backgroundColor:"#98FB98"}} lg={6} md={6} sm={12} xl={6} xxl={6}>   <h2 style={{ textAlign: "center", marginTop: "20px" }}>בואו להיות חלק ממעצמת </h2><br />
//             <h2 style={{ textAlign: "center" }}>בית כנסת ובית המדרש בית תפילה</h2><br />
//              <h4 style={{ textAlign: "center" }}>מי אנחנו?</h4><br />
//              <p style={{ textAlign: "center" }}>קבוצת אברכיםצעירים אשר רכשו דירות בשכונה והקימו קהילה טובה ואיכותית למען גידול הילדים באווירה טובה ונעימהבית הכנסת מתופעל בתפילות בימות החול וכן בשבתות ומועדים וכן ישנו כולל ערב  מכובד וכן כולל יום שישי ישביות בין הזמנין והכי חשוב אוירה נעימה ומאוחדת
//              </p></Col>
//       <Col style={{border:"1px solid black",height:"300px",backgroundColor:"#FFEFD5"}} lg={6} md={6} sm={12} xl={6} xxl={6} > <CarouselFadeExample />
      
//       <Row>
//         <Col style={{border:"1px solid black",height:"400px",backgroundColor:"#AFEEEE"}} lg={12} md={12} sm={12} xl={12} xxl={12}><ZmaneiHayom /></Col>
//       </Row>
      
//       </Col>
   
//       </Row>
//       {/* <Row>
//       <Col lg={6} md={6} sm={12} xl={6} xxl={6}> <CarouselFadeExample /></Col>
//         <Col sm={8}>sm=8</Col>
//         <Col sm={4}>sm=4</Col>
//       </Row> */}
     
//     </Container>
    
// //     <Box sx={{ flexGrow: 1 }}>
// //       <Grid container spacing={2}>
// //   <Grid  item xs={2} md={2}>
// //     <Item><Clock /></Item>
// //   </Grid>

// //   <Grid item xs={4} md={4} lg={6}>
// //     <Item>   <CarouselFadeExample /></Item>
// //   </Grid>

// //   <Grid  item xs={4} md={8} lg={5}>
// //     <Item>
// //             <h2 style={{ textAlign: "center", marginTop: "20px" }}>בואו להיות חלק ממעצמת </h2><br />
// //             <h2 style={{ textAlign: "center" }}>בית כנסת ובית המדרש בית תפילה</h2><br />
// //             <h4 style={{ textAlign: "center" }}>מי אנחנו?</h4><br />
// //             <p style={{ textAlign: "center" }}>קבוצת אברכיםצעירים אשר רכשו דירות בשכונה והקימו קהילה טובה ואיכותית למען גידול הילדים באווירה טובה ונעימהבית הכנסת מתופעל בתפילות בימות החול וכן בשבתות ומועדים וכן ישנו כולל ערב  מכובד וכן כולל יום שישי ישביות בין הזמנין והכי חשוב אוירה נעימה ומאוחדת
// //             </p>
// //           </Item>
// //   </Grid>


// //   <Grid  item xs={4} md={8} lg={6}>
// //     <Item> <ZmaneiHayom /></Item>
// //   </Grid>
// // </Grid>
// //     </Box>
//   );
// }



import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Clock from './clock';
import CarouselFadeExample from './carousel';
import ZmaneiHayom from './ZmaneiHayom';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { Container } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderRadius: '8px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
}));

export default function ResponsiveGrid() {
  return (
    <Container style={{ backgroundColor: "#F8F9FA", width: "100%", padding: "20px", borderRadius: '8px' }}>
      <h1 style={{ marginRight: "50px", color: "#333", fontWeight: "bold", textAlign: "center" }}>
        <Clock />
      </h1>
      <Row style={{ height: "auto", marginBottom: "20px" }}>
        <Col style={{ border: "1px solid #ccc", height: "auto", backgroundColor: "#98FB98", padding: "20px", borderRadius: '8px' }} lg={6} md={6} sm={12} xl={6} xxl={6}>
          <h2 style={{ textAlign: "center", marginTop: "20px", color: "#006400" }}>הצטרפו לקהילה שלנו</h2>
          <h2 style={{ textAlign: "center", color: "#006400" }}>בית כנסת ובית המדרש בית תפילה</h2>
          <h4 style={{ textAlign: "center", color: "#2F4F4F" }}>מי אנחנו?</h4>
          <p style={{ textAlign: "center", color: "#2F4F4F" }}>
            קבוצת אברכים צעירים אשר רכשו דירות בשכונה והקימו קהילה טובה ואיכותית למען גידול הילדים באווירה טובה ונעימה. 
            בית הכנסת מתופעל בתפילות יומיומיות וכן בשבתות ומועדים. כולל ערב מכובד וכן כולל יום שישי, ישיבות בין הזמנים והכי חשוב - אוירה נעימה ומאוחדת.
          </p>
        </Col>
        <Col style={{ border: "none", height: "auto", backgroundColor: "#FFEFD5", padding: "20px", borderRadius: '8px' }} lg={6} md={6} sm={12} xl={6} xxl={6}>
          <CarouselFadeExample />
        </Col>
      </Row>
      <Row>
        <Col style={{ border: "1px solid #ccc", height: "auto", backgroundColor: "#AFEEEE", padding: "20px", borderRadius: '8px' }} lg={12} md={12} sm={12} xl={12} xxl={12}>
          <ZmaneiHayom />
        </Col>
      </Row>
    </Container>
  );
}
