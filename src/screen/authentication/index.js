import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {SimpleButton} from '@components/button/index.js';
import Style from './style.js';
import InputField from '@components/input/index.js';
import Icon from 'react-native-vector-icons/Ionicons';
import {ms} from 'react-native-size-matters/extend.js';
import {Font, Light} from '@theme/index.js';

const SignIn = props => {
  const goBack = () => props.navigation.goBack();

  const navigateToVerficationSecond = () =>
    props.navigation.navigate('ForgotPassword');

  return (
    <View style={Style.container}>
      <StatusBar hidden={false}></StatusBar>
      <View style={{marginBottom: ms(23)}}>
        <TouchableOpacity onPress={goBack}>
          <Icon name={'arrow-back-outline'} size={18} color={Light.text} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView>
        <Text style={Style.text}>LET'S SIGN YOU IN</Text>
        <Text style={Style.subText}>Welcome back. You've been missed!</Text>
        <View>
          <InputField label="Email" />
          <InputField label="Password" password maxLength={8} />
        </View>
        <Text style={Style.stylePass}>Forget Password</Text>
        <SimpleButton
          title={'Sign in'}
          color={Light.primary}
          onPress={navigateToVerficationSecond}
        />
        <SimpleButton
          title={'Login with Google'}
          color={Light.text_secondary}
        />
      </KeyboardAvoidingView>
      <View style={Style.last}>
        <Text style={[{color: Light.subtext}, {fontFamily: Font.InterRegular}]}>
          New User{' '}
          <Text
            style={Style.lastText}
            onPress={() => props.navigation.navigate('SignUp')}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};

const ForgetPassword = props => {
  const goBack = () => props.navigation.goBack();

  const navigateToVerficationSecond = () =>
    props.navigation.navigate('OTPVerify', {
      afterVarification: 'ResetPassword',
    });

  return (
    <View style={Style.container}>
      <StatusBar hidden={false}></StatusBar>
      <View style={{marginBottom: ms(23)}}>
        <TouchableOpacity onPress={goBack}>
          <Icon name={'arrow-back-outline'} size={20} color={Light.text} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView>
        <Text style={Style.text}>FORGOT PASSWORD</Text>
        <Text style={Style.subText}>Please enter register email id</Text>
        <InputField label="Email" />
        <SimpleButton
          title={'Submit'}
          color={Light.primary}
          onPress={navigateToVerficationSecond}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const OTPVerify = props => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  const goBack = () => props.navigation.goBack();

  const navigateToVerficationSecond = () =>
    props.navigation.navigate(props.route.params.afterVarification);

  return (
    <View style={Style.container}>
      <StatusBar hidden={false}></StatusBar>
      <View style={{marginBottom: ms(23)}}>
        <TouchableOpacity onPress={goBack}>
          <Icon name={'arrow-back-outline'} size={20} color={Light.text} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView>
        <Text style={Style.text}>VERIFICATION CODE</Text>
        <Text style={Style.subText}>Please enter 4 digit code</Text>
        <View style={Style.inputContiner}>
          <View style={Style.textInputview}>
            <TextInput
              placeholder="0"
              style={Style.inputStyle}
              ref={pin1Ref}
              keyboardType="phone-pad"
              caretHidden={true}
              maxLength={1}
              onChange={pin1 => {
                setPin1(pin1);
                if (pin1 != '') {
                  pin2Ref.current.focus();
                }
              }}
            />
          </View>
          <View style={Style.textInputview}>
            <TextInput
              placeholder="0"
              style={Style.inputStyle}
              ref={pin2Ref}
              keyboardType="phone-pad"
              caretHidden={true}
              maxLength={1}
              onChange={pin2 => {
                setPin2(pin2);
                if (pin2 != '') {
                  pin3Ref.current.focus();
                }
              }}
            />
          </View>
          <View style={Style.textInputview}>
            <TextInput
              placeholder="0"
              style={Style.inputStyle}
              ref={pin3Ref}
              keyboardType="phone-pad"
              caretHidden={true}
              maxLength={1}
              onChange={pin3 => {
                setPin3(pin3);
                if (pin3 != '') {
                  pin4Ref.current.focus();
                }
              }}
            />
          </View>
          <View style={Style.textInputview}>
            <TextInput
              placeholder="0"
              style={Style.inputStyle}
              ref={pin4Ref}
              keyboardType="phone-pad"
              caretHidden={true}
              maxLength={1}
              onChange={pin4 => {
                setPin4(pin4);
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
      <SimpleButton
        title={'Verify'}
        color={Light.primary}
        onPress={navigateToVerficationSecond}
      />
      <Text style={Style.emailText}>Sent to registered Email</Text>
      <View style={[Style.last, {marginLeft: '16%'}]}>
        <Text style={{color: Light.subtext}}>
          Didn't receive the code?
          <Text style={Style.lastText}>Resend</Text>
        </Text>
      </View>
    </View>
  );
};

const ResetPassword = props => {
  return (
    <View style={Style.container}>
      <StatusBar hidden={false}></StatusBar>
      <View style={{marginBottom: ms(23)}}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name={'arrow-back-outline'} size={20} color={Light.text} />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView>
        <Text style={Style.text}>RESET PASSWORD</Text>
        <Text style={Style.subText}>Set new password</Text>
        <InputField label="New Password" secureTextEntry />
        <InputField label="Confirm Password" secureTextEntry />
        <SimpleButton
          title={'Save'}
          color={Light.primary}
          onPress={() => props.navigation.navigate('ResetSuccessfully')}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const PasswordSuccessfully = props => {
  const goBack = () => props.navigation.goBack();

  const navigateToVerficationSecond = () => props.navigation.navigate('SignUp');

  return (
    <View style={Style.container}>
      <StatusBar hidden={false}></StatusBar>
      <View style={{marginBottom: ms(23)}}>
        <TouchableOpacity onPress={goBack}>
          <Icon name={'arrow-back-outline'} size={20} color={Light.text} />
        </TouchableOpacity>
      </View>
      <Text style={Style.text}>PASSWORD RESET SUCCESSFULLY</Text>
      <SimpleButton
        title="Back to Sign In"
        color={Light.primary}
        onPress={navigateToVerficationSecond}
      />
    </View>
  );
};

const SignUp = props => {
  const goBack = () => props.navigation.goBack();

  const navigateToVerficationSecond = () =>
    props.navigation.navigate('OTPVerify', {
      afterVarification: 'Sign-Up',
    });

  return (
    <View style={Style.container}>
      <View style={{marginBottom: ms(23)}}>
        <TouchableOpacity onPress={goBack}>
          <Icon name={'arrow-back-outline'} size={20} color={Light.text} />
        </TouchableOpacity>
      </View>
      <Text style={Style.text}>SIGN UP</Text>

      <Text style={[Style.subText, {alignSelf: 'stretch'}]}>
        Already have an account?{' '}
        <TouchableWithoutFeedback>
          <Text style={Style.combine}>Sign in</Text>
        </TouchableWithoutFeedback>
      </Text>
      <KeyboardAvoidingView>
        <InputField label="Email" />
        <InputField label="Password" secureTextEntry />
        <InputField label="Name" />
        <InputField label="Time Zone" />
        <SimpleButton
          title="Sign Up"
          color={Light.other}
          onPress={navigateToVerficationSecond}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const SignUpSecond = props => {
  const goBack = () => props.navigation.goBack();
  const navigateTo = () => props.navigation.navigate('HomePage');

  return (
    <View style={Style.container}>
      <View style={{marginBottom: ms(23)}}>
        <TouchableOpacity onPress={goBack}>
          <Icon name={'arrow-back-outline'} size={25} color={Light.text} />
        </TouchableOpacity>
      </View>
      <Text style={Style.text}>SIGN UP</Text>
      <Text style={[Style.subText, {alignSelf: 'stretch'}]}>
        {' '}
        Already have an account?{' '}
        <TouchableWithoutFeedback>
          <Text style={Style.combine}>Sign in</Text>
        </TouchableWithoutFeedback>
      </Text>
      <KeyboardAvoidingView>
        {/* <InputField title='Email' /> */}
        <View style={Style.passwordContainer}>
          <Text style={{color: Light.subtext, fontSize: ms(13)}}>Email</Text>
          <TouchableOpacity>
            <Text style={Style.verifyStyle}>Verfiy</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={Style.inputStyleContainer} />
        <InputField label="Password" secureTextEntry />
        <InputField label="Name" />
        <SimpleButton
          title="Sign Up"
          color={Light.primary}
          onPress={navigateTo}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

export {
  SignIn,
  ForgetPassword,
  OTPVerify,
  ResetPassword,
  PasswordSuccessfully,
  SignUp,
  SignUpSecond,
};
