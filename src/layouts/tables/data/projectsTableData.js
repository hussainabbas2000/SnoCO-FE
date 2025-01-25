/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import MDBadge from "components/MDBadge";
// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";


//Axios
import axios from "axios";
import { useState } from "react";
import MDButton from "components/MDButton";

export default function Data() {

  const [surveys, setSurveys] = useState([]);
  
  //fetch surveys
    const fetchData = async () => {
      try{
        const res = await axios.get("http://localhost:4000/api/survey/getallsurveys");
        setSurveys(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    
    fetchData();
    
  


  

  
      
  

 


  const Survey = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  // const Progress = ({ color, value }) => (
  //   <MDBox display="flex" alignItems="center">
  //     <MDTypography variant="caption" color="text" fontWeight="medium">
  //       {value}%
  //     </MDTypography>
  //     <MDBox ml={0.5} width="9rem">
  //       <MDProgress variant="gradient" color={color} value={value} />
  //     </MDBox>
  //   </MDBox>
  // );

  return {
    columns: [
      { Header: "Survey Name", accessor: "survey", width: "30%", align: "left" },
      { Header: "Description", accessor: "description", align: "left" },
      { Header: "Created On", accessor: "created_on", align: "center" },
      { Header: "Keywords", accessor: "keywords", align: "center" },
      { Header: "Url", accessor: "url", align: "center" },
      { Header: "Department", accessor: "department", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: surveys.map(survey => ({
        survey: <Survey image={LogoAsana} name={survey.survey_name} />,
        description: (
          <MDTypography component="label" variant="button" color="text" fontWeight="medium">
            {survey.description}
          </MDTypography>
        ),
        created_on: (
          <MDTypography component="label" variant="caption" color="text" fontWeight="medium">
            {survey.created_date}
          </MDTypography>
        ),
        keywords: (
          <MDBox display= "flex" flexWrap = "wrap">
            {survey.keywords && survey.keywords.map((keyword) => {
              return (
                <MDBox ml={0}>
                  <MDBadge badgeContent={keyword} color="success" variant="gradient" size="sm" />
                </MDBox>
              )
            })}
          </MDBox>
        ),
        url: (
          
          <MDTypography component = "a" href={survey.url} variant="caption" color="text" fontWeight="medium">
            {survey.url}
          </MDTypography>
        ),
        department: (
          <MDTypography component = "label" variant="caption" color="text" fontWeight="medium">
            {survey.department_id}
          </MDTypography>
        ),
        action: (
          <MDTypography component = "a" href="#" variant = "button" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        )
    }))
    
    
    
    
    
    // [
    //   {
    //     survey: <Survey image={LogoAsana} name="Asana" />,
    //     description: (
    //       <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
    //         $2,500
    //       </MDTypography>
    //     ),
    //     created_on: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         working
    //       </MDTypography>
    //     ),
    //     keywords: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         keywords
    //       </MDTypography>
    //     ),
    //     url: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         keywords
    //       </MDTypography>
    //     ),
    //     department: (
    //       <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
    //         keywords
    //       </MDTypography>
    //     ),
    //     action: (
    //       <MDTypography component="a" href="#" color="text">
    //         <Icon>more_vert</Icon>
    //       </MDTypography>
    //     ),
    //   }
    // ],
  };
}
