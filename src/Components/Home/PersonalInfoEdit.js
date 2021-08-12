import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
// formik
import { Formik } from "formik";
// icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFromArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledTextInput,
  Colors,
  StyledText,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "../../Style/Styles.js";

//Colors
const { brand, darkLight, primary, blue } = Colors;

import { View, TouchableOpacity } from "react-native";

const PersonalInfoEdit = (props) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <Formik
          initialValues={{
            fullName: "",
            phone: "",
            passport: '',
            presentAddress: '',
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFromArea>
              <MyTextInput
                label="Full Name"
                placeholder="Enter your name...."
                placeholderTextColor={darkLight}
                onChangeText={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />
              <MyTextInput
                label="Mobile"
                placeholder="+8801700000000"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                keyboardType="numeric"
              />

              <MyTextInput
                label="Passport Number"
                placeholder="000 1911 544 370"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("passport")}
                onBlur={handleBlur("passport")}
                value={values.passport}
                keyboardType="numeric"
              />

              <MyTextInput
                label="Present Address"
                placeholder="House 181, Road 06, Mirpur-1, Dhaka, Bangladesh"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("presentAddress")}
                onBlur={handleBlur("presentAddress")}
                value={values.presentAddress}
              />

              <MyTextInput
                label="Change Password"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MyTextInput
                label="Type Master Password"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <StyledButton onPress={handleSubmit}>
                <ButtonText
                  // onPress={() => {
                  //   props.navigation.navigate("MobileOTP");
                  // }}
                >
                  Save & Edit
                </ButtonText>
              </StyledButton>
              <Line />


            </StyledFromArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View style={{width: "100%", marginTop: 25}}>
      <StyledInputLabel> {label}</StyledInputLabel>
      <StyledTextInput {...props} />

      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            size={30}
            name={hidePassword ? "md-eye-off" : "md-eye"}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default PersonalInfoEdit;
