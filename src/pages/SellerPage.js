
import {React , useState} from 'react';
import { Container, Row, Col, Card, Image, Button, Modal } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import backgroundImage from '../images/ferti.jpeg'; // Replace with the actual path to your default image
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Backdrop from '@mui/material/Backdrop';




import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';

import '../CSS/ProfilePage.css'
import { Navbar } from '../components';
import EditModal from '../components/UpdateProductModal';
import UpdateSellerProfileModal from '../components/UpdateSellerProfileModal';
import AddProductModal from '../components/AddProductModal';
import UpdateProductModal from '../components/UpdateProductModal';


 export const SellerPage = ()=> {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  // const useStyles = makeStyles((theme) => ({
  //   modal: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  //   paper: {
  //     backgroundColor: theme.palette.background.paper,
  //     border: '2px solid #000',
  //     boxShadow: theme.shadows[5],
  //     padding: theme.spacing(2, 4, 3),
  //   },
  //   backdrop: {
  //     backdropFilter: 'blur(4px)',
  //   },
  //   form: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     gap: theme.spacing(2),
  //   },
  // }));

  const [orderSlide , setOrderSlide] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const orderHistory = [
    {
      orderId: '123456',
      date: '2023-01-15',
      totalAmount: 120.5,
      status: 'Delivered',
      image: '../images/pest2.jpeg', // Replace with the actual path to the image for order 1
    },
    {
      orderId: '789012',
      date: '2023-02-22',
      totalAmount: 75.25,
      status: 'In Progress',
      image: '../images/ferti2.jpeg', // Replace with the actual path to the image for order 2
    },
    {
      orderId: '345678',
      date: '2023-03-10',
      totalAmount: 50.0,
      status: 'Shipped',
      image: '../images/pest.jpeg', // Replace with the actual path to the image for order 3
    },
    {
      orderId: '901234',
      date: '2023-04-05',
      totalAmount: 90.75,
      status: 'Delivered',
      image: '../images/pest2.jpeg', // Replace with the actual path to the image for order 4
    },
    // Add more order history items as needed
  ];

  const productsInfo = [
    {
      productName: 'BASF Ferilizers',
      description : "",
      price : 200,
      category : "Feritilzer",
      updatedDate: '2023-01-15',
      image: '../images/ferti.jpeg', 
    },
    {
      productName: 'Syngenta Zingaat',
      description : "",
      price : 120,
      category : "Pesticide",
      updatedDate: '2021-08-15',
      image: '../images/pest.jpeg', 
    },
    {
      productName: 'UPL NPK Fertilizer',
      description : "",
      price : 87,
      category : "Feritilzer",
      updatedDate: '2022-09-12',
      image: '../images/pest2.jpeg', 
    }
  ];

  const blurBackgroundStyle = {
    backdropFilter: 'blur(8px)',
  };

  const handleHistory = ()=>{
    setOrderSlide(!orderSlide);
  }

  const handleDelete = ()=>{
    console.log("delete called");
  }
  const handleEdit = ()=>{
    console.log("Handle edit");

  }

  return (
    <>
    <Navbar/>
    <section style={{ backgroundColor: '#eee' , height:'100%' }}>

    { orderSlide ? <div>
      <MDBContainer className="py-5">

             <MDBRow>
              <MDBCol>
                <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2>Seller Profile</h2>
                  <div>
                    <Button onClick={handleHistory} className="btn btn-outline-success btn-light m-2"><i className="fas fa-history"></i> My Products</Button>
                    <UpdateSellerProfileModal/>
                  </div>
                </MDBBreadcrumb>
              </MDBCol>
            </MDBRow>

      </MDBContainer>

      <Container className="mt-3 mb-5">
      <Row>
        <Col md={4}>
          <Card className="user-card shadow">
            <Image
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYYGBgYGRgaGRgYGhgYGhgYGRoZGRwYGhgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzYrJSs2NDQ1NDY0NDQ0NDY1NDQ0NDQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAECAwUGB//EADsQAAIBAgQDBgQFAwIHAQAAAAECAAMRBBIhMQVBUSJhcYGRoRMyscFCUnLR8AZi4RTCFSOCkqKy8ST/xAAaAQACAwEBAAAAAAAAAAAAAAABAgADBAUG/8QALREAAgIBBAEEAQMDBQAAAAAAAAECEQMEEiExQQUTIlFxMmGBFKGxQpHB0eH/2gAMAwEAAhEDEQA/APTVSTCSwLJWmlyMyiVgSVo8cCCw0RtHCSxElypFcqCog4pya05daOYu5jUV5IrRO0o+LCk2RtIvtFeUGoYwcw7WDcXkxCQUxKYKIEKsllkUMslbLEiMYyciwkI0Ul4g8dqccU41oSmSWOVjgR7xbHoFq04pbUMaWJsqcUURWjXiBjEslljgRs0cGB2FUTWTDSq8V4tBstzRi0qLytsSBIosDkl2XOJSUjDEqZIODGSaA5JjZYgsnaNmAhshNRJBZBXEsUxWFNE1MsvKY94jQ6ZYTI3jZo15KJZK8kJXePmkolll4xMheK8lEsqqmKKpFG4FB7x80hHtLaKrJXkgZACTAgYbEDJCRtKq9XKIKsO6uyVeoAJiY3GWvK+I8TyAk3NuSi5PgJztesauqVWQndWAIv0/tlWXMsfC5Zp0uhnqrd0l5f8A4ai8U7z+01MDjr85xFOvWVimZiRYlb6EHnbYjTebeHqhRewUkC632PPblK8Wqcn8jTqfRsmJJwd/g7D/AFItM/EY63OYtTGuVspX3/ntBXcsO249Cvuf2lss8EviZo+naiXaNynxLvmrhcbfecRqNum/Xv7obhcaVsD9YI5lLsry6PLh7R3dNwZO0wcDjr85uYepcRmvKK4yvglaIiTtGIi2OQtGMkRGtDYBhHitFaQlFbxR2EUIKAhVEsDrOXTiwvvLG4qBzh92H2U8nTK4lgE5zC8RDbGbWGxIIjcNWgxl4YXaZvEVNpoh4Ji2BEkewz6OF4qzh9NvYQDiHE1GqC9r5jZrk9QLWHqPQXnR8VpAgzjc5zgf3AW85h1MGpWjpenaqGFdW20q8UamEqMVBYksQL35c7fzrLteVvQytUtp6y5BMx6njsSqw/D5q2vvFUw4bUjtdflPnbQwhFlqxqKnJp8ACU2UaZu9SBfTmCPmHfrCqQVlIbp+HXQ9V5jvBl5UH/G4PWA1ewc2wvr/AG3/ABD+08x5w9CP5qmH4OtkYAkWOgYXsT0N9j49R1E63h9e4nGMFYa6gjW31HW1/fvIh/Csay9hj2k0v1G6nzH0mrFk52s4fqGkUV7sF12v+Ttla8czNweKuIZ8YS9xaOYpposivIK4MeLQ1krxiYoxMlEItFIVXtFGFtHlVZ7GUtV74NVckypmM4b+TFs1+H43KZ0mC4iOs4WkGvD6Lkc5rw6h41Qskmd5/wAQ03geJ4qo0JnNjHPa0FqVCx1l2bXbY/FcibTZx2OBBsZy1NSayn+9T7iaSpeTw+G7YPS/0mVamWRrcjRghc4r7aCQn875Mfy5EEasz3ytlQG11+ZrdPf6wDFcUpo2VVLsNCA2i9zObi/cLmFc9HsZTjBfJ0byP3r6y5SD0PgZzuHxBfXsIP7S5PqGX6QqrhKmhTEHwZVcf+Vz7wozyz4+0zbt3GNXQkXAuR/5Dmp8f2mSMTiKerIKi8zSurD/AKHJDeRh+G4ori99B8xsQV7nU6rGJHIpdFdGnl0B7LC63/CfynutfSKs3yuNCOyR53t5EMPOElQGIGx7S+IPat43B9ZTWQBiOTEN4Eae4K+hkXAupkvZk39G7gqpyiXYjHZRvM/DVRaC8Rqgi03vURUbPJbLZuYbiV+c18PigZ53RrMp0M38FxDTeJHUwlwwJSi+DqXrgQZsaJi4jiIA3mLX4zrBPUY49sbczpcVjtIpx9XiBYaRpX/XQBwDnCyJwsPvEJ5xZ5C2wNMPImnDpBkjxzPyQECRBIUKcfLLffVclsZJFdJI2OYrTYr8xAVe5nYKD7y9VleMPYY75RmHivaHuBHhmi5KjTpckfehf2YnEcVlX4aHKFABI3A2yr0Y6XPLblMOpmewRFQbDMxuT3gbeN5r08MSrA75iT1AGg/fxJh2FwSMO3a/5unpOjexJPydbO/fm2ulwv8As5mrgKlHt5rjQkK19zsLj+WnQVEc0Q6NcsSFFjyt1MWOo02ZUQkrzPUnlN/CYe9BBswZiO7WCXydiQjtVHC0mrl9VdyNwroPQMbH1mg2KYkMmanWTYOuUsPym2jqe4mdG3B0zZlBVzqcrW1PO0LbhxCa2Y7m+8bsVJxdpmZgOIB0V0FgH7Sc0bVWXw7QYeBmniz8vXX20nN06fw8Q6AdioMw6Zl+bzylvWdFWNz5D31mbPPZFl3qGWtKn5fBEOZU7XllpWRMH9Qzzm5kAJYrWkY9oqzWCx2YmB1acLkSIk8lkbsFRLRQhrRSneEkWklMi0dWj7aYpPWNeQepaRD3kdELbxSrPJh5Xbbog+aOVDAqdiCD56SBklluNqwptO0YzuUqN0Ohvvqt/aXcOwT1hcaJ+Y89dQvvrCOL4fTMBewJPedh+0oxGLqiiqo+RlsPlBuvS3Iz0O2M6kzqY8sow+PklU4VUpklcrpuV2fW3ysNDboRDsDjKjIESmDa4u/ZAOpsefXlMKhUrqoV6jte/bBynzFiD7fvpYaiyA5KpG+jZdbjxNze3KRqO4ti8m0u4rhKwtVX5gNQmwHS0rw/HGZdTqNCOYPQjcRv9RiUfN8RCth2GU7DT5tLHxgfEhne6ADNlXMNMxBsP28BFlFdxHhkknUkGAqRTzj5i5zDdSBl253XP6CaDsd+uoI2PeDzEweP1LfDpqxV01Bykm/dYGXcJxzsfhVFBLbMotZtfmF7Dlt5zJqse/hdo05tBPUaVST5VuvDNJqkjnkIwE5E34PMlqvHZpBRJOukkYtEHFSSYwUKZIsZOF2QkxilOYx4lIgRnvGzQdHhF5dBeWFiKXiSnaNntJ/ElkmgDfDiYWj/ABJW7xaVWCx1MmXldONWMWOJrklhWcZbHnp68vaA4Wj8w3sdOfty5SriSOMOXUG6uGHeoBvbrufMSrgnFEqNnBGa3aFrXv0noNNFrCrNuG1FBSiz5WRSvK45w2lhQdQB4At0/eWMqntXB7jYHY9e8j0kaD7Em1wDe4+Y2+5Et2s0qaBsRSyK7j8KsSLaHTT6iZ2Ccqjuw7VzlFr2Y3A9res2cfWBARNVN8x2toNu6Y/FVKIoU2IZe1fUksO0bc4NtL9xt25/sZhxYrP8anUViVUZGARhYbXOh1PdNHA9hlb8tiw/EAeZHMHqLjeVcKw9H4gRqS51J1IGupsQPD6S/wDqBiK4K6f8tRcbEXY/zwmScabb+z1GmyPJFQXTQXXNmIG3Lw5e1oyNI4Kp8VGJtmTKCNt+ncd+6RckTlajFTtHi9dppabPLG/4/Bcry8PpMsVdYUtXSJji/JjbCSZW5kabXlxpGGWFSdoiYKzRpY9OKVODQbKcljLlaLFiBZyI8o1wQLZ46tBlqXmvwbhxq3Y3CL0sCx6AmX4cUsjUY8siTbpAki6G2axt1sbeu06rA8Lom+jllPyuSCPIWuNOc0MgsLDLbSw0AHS06MfTm18nRasL8nF4bC1HF1Fh1JAB8LzTwnCmU5nykDWw1HmZp4pRrmGq2DADdTzgLcbUgoKbAqbaWN+mmk14tFjgk3bHjhVl9fD50YHp9p5bxvg74eoHTRXJKn8rA9pfv5906rjT1MRcDOhTVDmIJbe5toOXvHw2KTE0DQr9ip+FyLrnXmSNVPXuJmmf6WaIKmjnMPxypbJUQOLWvtNHB4vSwQ2PU6bco78LyMUcAsAD2TffYgiOq5OzYm+wmCWWSZujhiwqi5bmRbp16x1TPVpodczi/gva/wBslcouundCeAUbu2Ic5UQMAWNgSfma56AW8zGg5SkrJOMYxpDY/h9mSqumSoEPerXAB88vvH45hiyK45aHwOo97+sTcfp1fi0Ka3VbMXYWLMGvmQdAQBrNDRlancXYXHllt7lfUR88U219m303JKME/p/2Oe4S4Spl5OuXzGo+s2Ww4YTDr0LG40N9O48p2X9O4qniFC1EXOBqw7LXHUi1/GYFgWWW1snreieWs8PCpnLYrDZZGmt52PFP6cuL0mufyPbXuVh9xOabDvTYo6lWHIj+XHfBk07xvlHlJQlHsggtDaTiDObxIJU0kBBFe0UHsYpVz9Eosr04C9AnYTYCXEgaYjPHuQUZmBwJeoqa2J7RHJeZndUU+HlQAZNALd+lvGD8PwKom3aZbsfHYeV4Q9rFSdGA8jyM7Gj03swt9s0Y40PWNirqdmsR/bex8xp7wp11PheDPuA2z6H9dtD5gW8oTg3zLY7gWPiJruy+uAPE9lkfk10bz1HvaD4vAqGzgdCYTxJeweq9oeI1+0KqrcA9U+0PQDC4lhQCHA6H319iZRjeCoXzoNSM1uv+Zs4ilmQDxHl/DHw2tNDzU2P0tI0FM5StgHQAp203VbAOgJ1yNuQDfsN4aQU0VzA6aC4OwI66+HiNZ0WLQ02Ol0LX03Qn8Q7jsR5yzDYBWAqhb8wDsO1lLW5m48Ne+LkxQnG/P+R8eWcZV4/wZOH4dez1RoflTm3eeg842IwrVFGb5VayqNFUdABOlq4YZvK9/KUtQ7C+P3EEMcYrgaWWUnycFjMEtN3YKb9q1upEajxgqyrlDMcys17ZA2U9LEjKPOdbj8CCz6X2MExH9OJUGe1iQCbdRYe4AlOXE27TN+m1cMcVGS4vn7M7GIL2Ol9bdL6w7+k7rVbvVr+dvuJpPwJGRLbhtTzIOh19IRwzhKIQ1u1djudNbAHwEqjglGaka8nqGKeFw55VG4pOnsJXxbh1OqoDnKw2cbi/LvHdJ4Z93PP5B3dfPeMz5tbi/IG4PcxHObHFSVM8/KKfDOI4jgmouUbXYg9Qdjblz9IA1W06j+qsM2VHOpBKsf1ar9GE5GqlzONq4qDaRjlHbKi9MUI8H/0t+cUzRUq6Bwa7PYQUVySB1IHrHpgtCcBhb1aen4gfTX7RcU5zmklw2RI612zf2sBbuP7SqspYWIs1rjvtCsRRDWI0I3lFFj2Q242PWekbNiQsJZ0GbY3VuoI2PjeQwZZKuVtSwOv5suzW62Nj4S3Cpldvysb+Bkqr2emTvnYf+J/aCLHGxo1Hepj4Zs1JO5LRY7Rh+mVcLbs28fqYWKWsNPORw6WFRejA+ovJjbz/AHip/O/ei+0NgA8cl1I6qfpJ8C7WGQnVgGBPUrUZSfUXltZdBKv6YayMn5Kjr/3dv/fCmN4CKo7SnkRb7WkKqWXwYeknX0W/Rv8AEeqLhh1H+YboFg9an22HUfaW4enYZeq6eIktyrdQJNtrjdTFZLKzoi/qynz2meapLMo3Zwo7s2p9rzRxx7DW6BvTWZdBr1jbe7EX6myg+xksKNSq4OinRdByAt1kaA7ZHTUsd2J+g7pM0QFItsR5ncmNRbM7EdBIyBHFsIKtNk/Muh6Noyn1nmjIbm+40I6Ebiep1jovgPaefccphK9Qf3Zh/wBfa+853qELSl/BmyrpgAr20MaDPqYpx901xZVRp4WsBvN3gTKzljyFge8/4HvOXc66Tp/6fwhNMEm2YlvLYfT3m/QOUp010PiVyNoki5FmU6d/pB8VjFRkDbm+Xl01hCUwFNxcE7c/GZ+NwDNqAKgW9lY2Yq1rqD1BFwbj216uRSr4m/HGLktwdSroTlzKSTsCL2MFq4oM3QpU2572J9DMT/g+IvmUArclVZrOPO1j43Esq8OxDHMVN9L3ZLm22t9++Uqc/pl/tY+eUdBjW+U9xlHC3Ia3deUIarIM6MCgIvp2u+w1vLsHRbOCBpl1mq7MrVOgwH6ySfOf0yDFb2uRr0v9JelPtZri2W0gKZQw7PgTAuDNlq116Ojf9wK/7BDmUiwtp1mSlVUxNTOQqul7k21VhbXrZmhIkbGJGjjzkQdFPUQGpxald8rF8qXYrrYE2F8sBTjgyqqoSR1sBEeSPljLHJ9I2RUVE7TAZWtr0Yi3uZOpikUkFhqLnUaa8/WcxiWdzdiB0C8vOQSmF6jwvFlk+iyOH7NjGcUpZSBUT5CPmX94LwisKjM669oqCNrAmx9CJnMq6GwaxvsCQfA7zQTGOGAYWPYNj+Vr22iQyNyplmTFGMbj/c3K9U5SvOVYCp2iLdddOUgzam/MSnhDnW+1yL+ctvky1wbz6qO6cd/V2HtUV+ToPVSQfYrOuRuz5H0v/wDZm8bwwegfzJdl8vmH/bf0Ep1eL3MTS8c/7FWSNxPOqzhYoXi6YtrFOE5U6MoMt52OBuioPyqo87C85+nhlAnSKvIcp09BicLbf0X4VyzRfE5hddP7ZQ1W51B8pSDfnYyYJH4hOnZoCEq95lgqDqbeED+I3USLYhh0ksgdVri18w9JLAqRuLM2vTXp6TOwtQVCwJGZdgPrealF8wGvaXfuI5yXwREaj2Nxtz7pLNtY2J6bHyjv8xP4fxCB4zEJTDZjYWuDBL7HXI3FMd8NCdn2VdwSedunOcQ9O5ubknck84TxPinxHzMdALKOg018TAXxq332mDLk3SNmKG1c9mjw3AZyTe1lb8QW53ynXUaeUIo0wLi4uOhuD3g85jYHiA+NTXNlzErm33U6W8recspNpva32lSkky2nI2KlcCUvil5kzKfFc95WnEwN0v5w+7yT21Rq50Otz4yp8UFa9ybBRfW1gSRb1MDGOR/wWPPk3kNoFxPEf8ssnaC3zDnax5c40cjvgEoLad6HzhbeZHrCcNUW+W4B5Dn3mY2Cd0polxmygtc87ai/OFUKJLXNr2uW7ugO03I5zXBvpV1tfl+8o4m7Cg7Kb2QjTv0PoDKqVAfMTe40hKUlKOl73FiP1AiNJNxaK5co85rgmKKtWtvFPLuOR80YqA8PjmuB3idu7ajlacDiwUazCxHdO2eup356gzraG1a/BowvsJfEkaaG+0sD6fLMpnF73lgxH90320aOA13H5TBa7joY3xtdDfulzuR/LQ7/ANybTBXGmjWVxmtezDqp3/edwKq9mqmqsBfvB2M47iWYi4A9YXwPiZSg6ORZDcMdgp5fX1kU0mSjex/EFpZmJAUi5vt4zz/ivFKld7gEKNFB6dT3mD8V4zncuzXA0Rd7W00HUzMfEV30RG8bW+u3nM85yn8UuDTCMYcvsJrI34jKMg3Z/eMeF1SrPXfIiC5sC1h0uOfheaHBOH4arde27jU5uyGA5gdPIHXvESOFvyM8q+gLBUs1VCnayMWPQAKd/wCc5ZhcLWLWVHJPIMP3nZYbhiqMqqFUjshQNT3yfBqQ2PzXdtBbaygW85asEfInvNco41ldHyuGU9GBB995Y+1x/id7jsOjgUqiZka7BhoyEb2blKsHwCglstMOTr2mLEW7nuBuNpVLSvdw+CyOpVco5Hh+Fq1MpVLqTqzdgLrqRmsT5XnQ4bgFHMS9XODYZNUAHO5Gp9ROiARdGTL4gNFam2mZLfptL4YYx/cpnnlL9ixsILEBVIbmQCD4mDlAhtlI5ZlOmndJLhmTWmb33Um6ny5S1ambsmyN+Qnf9J5y8pFRdWIyGxX0P7Q1ANGGhJ18uUy3oEHsaW3huHfNr0Hv1hFZxGJwHbqX5OwHhmNooVxuv8Ou99iQfVQfvGnDyuMZtWYZLkyl4stQ5XUK3K4uJoshIADqNNBytBaGHoXL2BFtAdfOQLoTdO0AbEdPCWx3w5ux1JxfBZVSqvK46qL/AElX+qa9rG/QqZdUJtubdQZSKB3ViDyN/vLnlkukWLO/KLaeKfcISBuVvLa/EFQXcFR1YW+8J4eDkGb5je/qR9hIY6iHBVhcH95qim4p32Xxla5M5+K0nBsbjnbWV/8AFKaKVFNnB1sVQqx66wPF8NKMSo2AA6W8JD4bgarfTlylOX3F+k0QUfIWMU7apTpUweaorH6Wg1XBOzBjUdj+tgPDKLCCVsUydkAg+3WSpcTcbi3lM793zZqi8S6CauBQnUG/Mm5j4MU0YMrWZTcH9xzHKW0uKK2hlzfCcbi/daBNryO9r6OiocUR1zqbMpAK/l/wesJrIq1kqoexez/9Vhf1tONbCgEMjFGGzD6Ecx3GFYLjF81JzlLeh71/abMeZS4fZjyY3F2ujr6r3Zv1W9/8SzOOebTa2mnjMZqxNmvqcpPTvmhQrqVGfNfa6900WUByVTy1/VrEXB+YJ6CBs1E7u/mDIjD0m0VxfoTBZA21P83lqYzUkYaKD05Ed4g54f8A3ge8rehbd/QQ2A0Ud7Wcgjkdj59ZNKg2G0yRUt1MKp1L72Em4hyX9Vv/APpa+2VT6iKU/wBQMGxNQnYZQPJVB97xTg55L3JfkztO+jMaiUOZSNBsTyl3Dq4U6n5txBcSLEkHeDpTd9VUnwhjKpWipvg32qN+HURU8TcFWFjA+H4WqNWaw6TWq4VDYzVBbnw/4Fo08NTyoq9wv9/eMyX/AJ1Mml8ovvbX0kwPqPYTpVSo2xKKlEG+m5H0lf8AohcnoLecNUbeJMsUaeJ+kFDmbV4Uj2uuwvMzF8ABFwdeX/2dUyfN3C0h8O+UWgaREcDX/p6sD2SG7jofUTPrYGsurIwtzBBH7+09R+ELk25QXG4YfDbTUg/SL7abHU5I83as66MbHowK/WU13zfP5G9vMT1PEcPRgbqDqdx3zK4hwpFN8i5QLstgdOo/aV+19D+4/JyXD/6jZAEqkso0Dj5lHRgPmHfv4zueBYxahtmWz6qwswJ7jtrMJ+DYdzYUaZB/FotvQXlmG4RRoE/CdkbRrISVuNb2JIv3yxWhXR15VQbMGbwFhI1EFrZFt3gTOfjNRlAyDNbVrkX78o29YC4quQWcgHkNB7ax/wAFbYXifhobX8gSfQCBPxFR8qk95vCcFQKnQfhb3/gnJYNajjtm2g2lOecoJbVZVKe03n4q233lqYt7XDD6zCq4Zl2lVHFldGvMb1M3xLgrc5Posx4JPW516k76xSirxRQdFvaKFYY/Yu6RLH4YowBIObnNHD0sgAG0pq8PLHQ6d5J9JJcb8I5Ko05MJTGNN8UVtBw2vIV3cFMqkgsoPcCdTL8Pryuu4MOpZCLjkfeacWJt7rDCNyLSY4OvrKHqb2/m0mrf7pus2l68vAydNvlHnKVf/wBZam47lhYS9Toe8ywbjwg6Np4mXg9o9wkaAOW7JtzMhihfIvVl9Acx9gYr9nzkUfNUFvwKdx+JrKPYtDdMNBpFx4n6mUVFBdu5dfeE5Dmy/lFz9oKCe01tzpFXIWZzcNQAWW1ztrYCWDCixsNyBNLL7CJU0UecakKAPRtfTbQeMY0dh4D7mGlNvEn0jFfW1/Mw0AahSG/cPr/8nCNjUQC/rO+p7HoAf57ThMFTzizDYTBrZyhKMoq+ynKl5ILxOmRvAv8AUqSbjSQ4lgwj3URkGbcWmPLL3KdASSVobsxSnF0wNjFF5XkWjqqehPiZdXpKydoA6c4opqXkQ4+pjqi1Vs5Gwtyt0ttO0wHyDvP3iilmm7Lcf6i0fb7CWdfOKKbTQOOfgIQm5/TFFIyImNll6/iiikCVO5suvOSwutVwdeyn/s0UUHlhXQYyAHbl+8ow7nKuvP7xRSLsDCH/ABfzpHO4/TFFGAuirkP0n6xfuPoYoo3kAn+Rv0n/ANROUwtFcgNtbbxRTDrOl/JnzeCvF0wdxMTG6aDSKKYP9AkTGxTm+8UUUsj0Wn//2Q==" // Replace with the actual user image URL
              alt="User"
              roundedCircle
              className="user-image"
            />
            <Card.Body>
              <Card.Title>Rajesh Patil</Card.Title>
              <hr style={{ color: '#06d47b', border: 'solid', borderWidth: '2px', opacity: '0.7' }} />

              <Card.Text className="text-muted">Seller</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card className="user-info-card shadow">
            <Card.Body>
              <Card.Title className="mb-4">Seller Information</Card.Title>
              <Row>
                <Col md={6}>
                  <p className="info-label">Address</p>
                  <p className="info-text">Datala, Malkapur</p>
                  <hr style={{ color: '#06d47b', border: 'solid', borderWidth: '2px', opacity: '0.7' }} />

                </Col>
                <Col md={6}>
                  <p className="info-label">Email</p>
                  <p className="info-text">Rajesh@example.com</p>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <p className="info-label">Phone</p>
                  <p className="info-text">(02580)-123456</p>
                  <hr style={{ color: '#06d47b', border: 'solid', borderWidth: '2px', opacity: '0.7' }} />

                </Col>
                <Col md={6}>
                  <p className="info-label">Mobile</p>
                  <p className="info-text">09876554321</p>
                </Col>
              </Row>
              {/* Add more user information as needed */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>: 
    //content cnhages here 

    <div>
            <div style={{ margin: '20px' }}>

       <MDBContainer className="py-5">

        <MDBRow>
        <MDBCol>
          <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2>My Products</h2>
            <div>
              <Button onClick={handleHistory} className="btn btn-outline-success btn-light m-2"><i className="fas fa-history"></i> Profile</Button>
              <AddProductModal/>
            </div>
          </MDBBreadcrumb>
        </MDBCol>
        </MDBRow>

        </MDBContainer>

        <Container fluid className="mt-3 mb-5">
      <Row>
      
        {/* Right side with the order history */}
        <Col md={2}></Col>
        <Col md={8}>
          <Card className="user-info-card shadow">
            <Card.Body>
              <Card.Title className="mb-4"></Card.Title>
              {productsInfo.map((order, index) => (
                <Row key={index} className="mb-4 align-items-center">
                <Col md={4}>
                  <img src={order.image || backgroundImage} alt={`Order ${order.productName}`} className="order-image" />
                </Col>
                <Col md={4}>
                 {/* <p className="info-label">Order ID: {order.orderId}</p>
                 
                  <p className="info-text">Order Date: {order.date}</p>
                  
                  <p className="info-text">Total Amount: ${order.totalAmount.toFixed(2)}</p>
                  <p className="info-text">Status: {order.status}</p> */}

                <p className="info-label">Product Name : {order.productName}</p>
                <p className="info-text">Category : {order.category}</p>

                <p className="info-text">Price: ₹{order.price.toFixed(2)}</p>

                <p className="info-text">Description: {order.description}</p>

                 
                <p className="info-text">Order Date: {order.updatedDate}</p>
                 

                </Col>
                <Col md={3}>

                <UpdateProductModal/>
                
                <span>  </span>
                 <span>  </span>
                <button type="button" class="btn btn-danger" onClick={handleDelete}>Delete</button>
                </Col>
                <hr style={{ color: '#06d47b', border: 'solid', borderWidth: '2px', opacity: '0.7', width: '100%' }} />
              </Row>
              ))}
              {orderHistory.length === 0 && (
                <p className="info-text">No order history available.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  </div> 
    
    }



      
    </section>
    </>

  )
}

    













































































































// import React, { useState, useRef } from 'react';
// import Navbar from '../components/Navbar';
// import './Profile.css';
// import {  useContext, useEffect } from 'react';
// import userContext from '../context/User/userContext';
// import { Link } from 'react-router-dom';
// import DonationHistoryItem from '../components/DonationHistoryItem';

// export const Profile = () => {
//   const context = useContext(userContext);
//   const { getProfileInfo, userProfile, profileImg } = context;
//   const { firstname, lastname, username, address, age, phoneNumber, email, company } = userProfile;

//   const [donationHistory, setDonationHistory] = useState([]);
//   const donationHistoryModalToggle = useRef();

// //   const fetchDonations = async() => {
// //     const url = "http://localhost:5000/api/charitydonations/fetchdonationsbyuser"
// //     const response = await fetch(url,
// //     {
// //       method: 'GET',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'accept':'application/json',
// //         'username': username
// //       }
// //     });
    
// //     const data = await response.json()
// //     // console.log(data)
// //     setDonationHistory(data)
// //   }



//   const handleDonationHistory = () => {
//     fetchDonations();
//     donationHistoryModalToggle.current.click();
//   }

//   useEffect(() => {
//     getProfileInfo();
// 	// eslint-disable-next-line
//   }, []);

//   useEffect(() => {
//     fetchDonations();
// 	// eslint-disable-next-line
//   });

//   return (
//     <>
//       <Navbar />

//       {/* Donation history modal button hidden */}
//       <button type="button" ref={donationHistoryModalToggle} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#donationHistory"></button>

//       {/* Donation History Modal */}
//       <div className="modal fade donation-history-container" id="donationHistory" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="donationHistoryLabel" aria-hidden="true">
//         <div className="modal-dialog modal-dialog-centered donation-history-modal-dialog">
//           <div className="modal-content" style={{borderRadius:"0px", border:"none"}}>
//             <div className="modal-header donation-history-modal-header">
//               <h5 className="modal-title donation-history-modal-title" id="donationHistoryLabel">Donation History</h5>
//               <button type="button" style={{color:"white"}} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body donation-history-modal-body">
//             <div className="donation-history-separator"></div>
//               {
//                 donationHistory.map((entry) => (
//                   <DonationHistoryItem 
//                     key={entry._id}
//                     name={entry.charityName}
//                     amount={entry.amount}
//                     time={entry.timestamp}
//                     status={entry.status}
//                   />
//                 ))
//               }
//             </div>
//             <div className='modal-footer donation-history-modal-footer'>
//               <div>For non-verified charities: </div>
//               <div style={{width: "20px", height: "20px", background: "#a8ffd2"}}></div>
//               <div>Success</div>
//               <div style={{width: "20px", height: "20px", background: "#ffffa3"}}></div>
//               <div>Pending</div>
//               <div style={{width: "20px", height: "20px", background: "#ffbdbd"}}></div>
//               <div>Reverted</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="main-content">
//         {/* <!-- Header --> */} 
//         <div
//           className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
//           style={{
//             minHeight: '600px',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center top',
//           }}
//           id="triangleBackground"
//         >
//           <span className="Triangle" id="ATriangle1"></span>
//           <span className="Triangle" id="ATriangle2"></span>
//           <span className="Triangle" id="ATriangle3"></span>
//           <span className="Triangle" id="ATriangle4"></span>
//           <span className="Triangle" id="ATriangle5"></span>
//           <span className="Triangle" id="ATriangle6"></span>
//           <span className="Triangle" id="ATriangle7"></span>
//           <span className="Triangle" id="ATriangle8"></span>
//           <span className="Triangle" id="ATriangle9"></span>
//           <span className="Triangle" id="ATriangle10"></span>

//           {/* <!-- Mask --> */}
//           <span className="mask bg-gradient-default opacity-8"></span>

//           {/* <!-- Header container --> */}
//           <div className="container-fluid d-flex align-items-center">
//             <div className="row">
//               <div className="col-lg-7 col-md-10">
//                 <h1 className="display-2 text-white">
//                   {firstname + ' ' + lastname}
//                 </h1>
//                 <p className="text-white mt-0 mb-5">
//                   This is your profile page. You can see your donation history and edit profile information.
//                 </p>
//                 <Link to="/editprofile" className="btn btn-info">
//                   Edit profile
//                 </Link>
//                 <button className="btn btn-primary" onClick={handleDonationHistory}>Donation History</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Page content --> */}
//         <div className="container-fluid mt--7" id="profileInfoWrapper">
//           <div className="row">
//             <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
//               <div className="card card-profile shadow rounded-0">
//                 <div className="row justify-content-center">
//                   <div className="col-lg-3 order-lg-2">
//                     <div className="card-profile-image">
//                       <a href="/">
//                         <img
//                           src={
//                             profileImg ||
//                             'https://www.pngitem.com/pimgs/m/287-2876223_no-profile-picture-available-hd-png-download.png'
//                           }
//                           alt="profimage"
//                           className="rounded-circle"
//                         />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//                 {/* <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
// 							<div className="d-flex justify-content-between">
// 							<a href="/" className="btn btn-sm btn-info mr-4">Connect</a>
// 							<a href="/" className="btn btn-sm btn-default float-right">Message</a>
// 							</div>
// 						</div> */}
//                 <div className="card-body-1 pt-0 pt-md-4">
//                   <div className="row">
//                     <div className="col mb-5">
//                       <div
//                         className="card-profile-stats d-flex justify-content-center"
//                         style={{ margin: '100px', marginBottom: '10px' }}
//                       >
//                         <div>
//                           <span className="heading">22</span>
//                           <span className="description">DTC</span>
//                         </div>
//                         <div>
//                           <span className="heading">10</span>
//                           <span className="description">Photos</span>
//                         </div>
//                         <div>
//                           <span className="heading">89</span>
//                           <span className="description">TAD</span>
//                         </div>
//                       </div>
//                       <div className="md-4 text-center">
//                         <small className="text-muted mx-4">
//                           DTC - Donated in Total charities
//                         </small>
//                       </div>
//                       <div className="md-4 text-center">
//                         <small className="text-muted mx-4">
//                           TAD - Total Amount donated
//                         </small>
//                       </div>
//                       <div className="md-4 text-center">
//                         <small className="text-muted mx-4">
//                           TAD - Total Amount donated
//                         </small>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <h6>
//                       {firstname + ' ' + lastname}
//                       <span className="font-weight-light">, {age}</span>
//                     </h6>

//                     <div className=" mt-4">
//                       <i className="ni business_briefcase-24 mr-2"></i>Solution
//                       Manager - Creative Tim Officer
//                     </div>
//                     <div>
//                       <i className="ni education_hat mr-2"></i>University of
//                       Computer Science
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-xl-8 order-xl-1">
//               <div className="card bg-secondary shadow rounded-0">
//                 <div className="card-header bg-white border-0">
//                   <div className="row align-items-center">
//                     <div className="col-8">
//                       <h3 className="mb-0">My account</h3>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="card-body-1">
//                   <form />
//                   <h6 className="heading-small text-muted mb-4">
//                     User information
//                   </h6>
//                   <div className="pl-lg-4">
//                     <div className="row">
//                       <div className="col-lg-6">
//                         <div className="form-group focused">
//                           <label
//                             className="form-control-label "
//                             htmlFor="input-username"
//                           >
//                             First Name
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {firstname}
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-6">
//                         <div className="form-group">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-email"
//                           >
//                             Last Name
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {lastname}
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="row">
//                       <div className="col-lg-6">
//                         <div className="form-group focused">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-first-name"
//                           >
//                             {' '}
//                             User Name
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {username}
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="col-lg-6">
//                         <div className="form-group focused">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-last-name"
//                           >
//                             Email Address
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {email}
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <hr className="my-4" />
//                   {/* <!-- Address --> */}
//                   <h6 className="heading-small text-muted mb-4">
//                     Contact information
//                   </h6>
//                   <div className="pl-lg-4">
//                     <div className="row">
//                       <div className="col-md-8">
//                         <div className="form-group focused">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-address"
//                           >
//                             Address
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {address}
//                             </small>
//                           </div>
//                         </div>
//                       </div>
                      
//                     </div>
//                     <div className="row">
//                       <div className="col-lg-4">
//                         <div className="form-group focused">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-city"
//                           >
//                             Phone Number
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {phoneNumber}
//                             </small>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="col-lg-4">
//                         <div className="form-group">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-country"
//                           >
//                             Company
//                           </label>
//                           <div>
//                             <small className="form-text text-muted">
//                               {company}
//                             </small>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <hr className="my-4" />

//                   {/* <!-- Address --> */}

//                   <h6 className="heading-small text-muted mb-4">
//                     Donation Information{' '}
//                   </h6>
//                   <div className="pl-lg-4">
//                     <div className="row">
//                       <div className="col-lg-4">
//                         <div className="form-group focused donation-history-head-row">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-city"
//                           >
//                             Charity Id
//                           </label>
//                         </div>
//                       </div>

//                       <div className="col-lg-4">
//                         <div className="form-group donation-history-head-row">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-country"
//                           >
//                             Time Stamp
//                           </label>
//                         </div>
//                       </div>
//                       <div className="col-lg-4">
//                         <div className="form-group donation-history-head-row">
//                           <label
//                             className="form-control-label"
//                             htmlFor="input-country"
//                           >
//                             Amount
//                           </label>
//                         </div>
//                       </div>
//                     </div>

//                     {
//                       donationHistory.map((entry) => (
//                         <div className="row">
//                           <div className="col-lg-4">
//                             <div className="form-group focused donation-history-row">
//                               <label
//                                 className="form-control-label donation-history-row-item"
//                                 htmlFor="input-city"
//                               >
//                                 {entry.charityName}
//                               </label>
//                             </div>
//                           </div>
//                           <div className="col-lg-4">
//                             <div className="form-group donation-history-row">
//                               <label
//                                 className="form-control-label donation-history-row-item"
//                                 htmlFor="input-country"
//                               >
//                                 {new Date(entry.timestamp).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}
//                               </label>
//                             </div>
//                           </div>
//                           <div className="col-lg-4">
//                             <div className="form-group donation-history-row">
//                               <label
//                                 className="form-control-label donation-history-row-item"
//                                 htmlFor="input-country"
//                               >
//                                 {entry.amount} ETH
//                               </label>
//                             </div>
//                           </div>
//                         </div>
//                       ))
//                     }
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };