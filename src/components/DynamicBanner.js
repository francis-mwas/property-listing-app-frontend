import styled from 'styled-components';
import defaultImg from '../images/apart-8.jpg';

const DynamicBanner = styled.div`
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  background-size: cover;
  background-position: center;
  grid-column: full-start / full-end;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  align-items: center;
`;

export default DynamicBanner;
