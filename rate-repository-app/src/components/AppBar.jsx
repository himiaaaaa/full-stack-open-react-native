import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import useMe from '../hooks/useMe';
import useSignOut from '../hooks/useSignOut';

import NativeText from './Text';

import theme from "../theme";

const styles = StyleSheet.create({
    appBar:{
        backgroundColor: theme.colors.textPrimary,
        paddingTop: theme.padding.appBarTop,
        paddingBottom: theme.padding.appBarBottom,
    },
    Link: {
        marginLeft: 15,  
    },
})

const AppBars = ({...props}) => {
    const appBarStyle = [
        styles.appBar,
    ];

    return <View style={appBarStyle} {...props} />;
}



const AppBar = () => {
    const { me } = useMe();
    const [signOut] = useSignOut();

  return <AppBars>
           <ScrollView horizontal={true} >
              <Link to='/'>
                <NativeText style='appBar'>Repositories</NativeText>
              </Link>
              { me ?
                <>
                  <Link to='/createAReview' style={styles.Link}>
                    <NativeText style='appBar' >Create a Review</NativeText>
                  </Link>
                  <Link to='/myReview' style={styles.Link}>
                    <NativeText style='appBar' >My Review</NativeText>
                  </Link>
                  <Link to='/signIn' style={styles.Link} onPress={signOut}>
                    <NativeText style='appBar' >Sign Out</NativeText>
                  </Link> 
                </>
                :
                <>
                  <Link to='/signIn' style={styles.Link}>
                    <NativeText style='appBar'>Sign In</NativeText>
                  </Link>
                  <Link to='/signUp' style={styles.Link}>
                    <NativeText style='appBar'>Sign Up</NativeText>
                  </Link>
                </>
                
              }
           </ScrollView>            
        </AppBars>;
};

export default AppBar;