import React from 'react'
import { FileSystem, Asset } from 'expo';
import {
  View,
  StyleSheet,
  Animated,
} from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import * as Device from 'expo-device';
// import { Thread } from 'react-native-threads';
// import { Worker } from 'react-native-workers';

// Local components
import Header from './../../components/Header'
import Search from './../../components/Search'
import Card from './../../components/Card'
import NoOpenJobAlert from './NoOpenJobAlert'
import WorkAreaNotSet from './WorkAreaNotSet'
import CutomButton from './../../components/Button'

// Images
import BackgroundImage from './../../components/BackgroundImage'
// Config
import { Color } from './../../global'
import configs from '@utils/configs';

import Database from '../../Database.js';

const DB = new Database();
let db = DB.openDatabase(db);

class Jobs extends React.Component {

  constructor(props) {
    super(props)

    const scrollAnim = new Animated.Value(0)
    const offsetAnim = new Animated.Value(0)

    this.state = {
      jobs: [],

      entityId: 0,
      username: '',
      password: '',
      listKind: 0,
      jobId: 0,
      jobCategoryId: true,
      jobStatus: 0,
      searchText: '',
      limitForm: 0,
      limitCount: 0,
      searchBudgetMin: 0,
      SearchBudgetMax: 0,
      searchSkillId: true,
      searchCountryISO: true,
      searchStateISO: true,
      searchCityId: true,
      searchVerificationArray: true,
      searchEmploymentType: true,
      searchEntityId: 0,
      sortByDestination: '',
      languageISO: '',

      scrollAnim,
      offsetAnim,
      clampedScroll: Animated.diffClamp(
        Animated.add(
          scrollAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolateLeft: 'clamp'
          }),
          offsetAnim
        ), 0, 112
      )
    };
  }

  componentDidMount() {
    DB.initDatabase(db);
    // this.addCategories();
    this.addJobs();
  }

  addCategories() {
    const xmlHeader = '<?xml version="1.0" encoding="utf-8"?>';
    const xmlRequest = '<env:Envelope xmlns:env="http://www.w3.org/2003/05/soap-envelope" xmlns:ns1="urn:StartAJob.Intf-IJobManagement" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:enc="http://www.w3.org/2003/05/soap-encoding"><env:Body><ns1:GetJobCategoriesList env:encodingStyle="http://www.w3.org/2003/05/soap-encoding"><EntityId xsi:type="xsd:int">0</EntityId><ParentID xsi:type="xsd:int">0</ParentID><LanguageISO xsi:type="xsd:string"></LanguageISO></ns1:GetJobCategoriesList></env:Body></env:Envelope>';
    fetch(configs.jobURL, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic YWRtaW53ZWJzaXRlOk5mbjM5Zm5BQWQyMw==',
        'Content-Type': 'text/xml',
      },
      body: xmlHeader + xmlRequest,
    }).then((response) => response.text())
      .then((responseText) => {
        const responseJson = JSON.parse(responseText.split('<return xsi:type="xsd:string">')[1].split('</return>')[0]);
        DB.addCategories(db, responseJson);
      }).catch((error) => {
        return
      });
  }

  addJobs() {
    const { entityId, username, password, listKind, jobId, jobCategoryId, jobStatus, searchText, limitForm, limitCount, searchBudgetMin, SearchBudgetMax, searchSkillId, searchCountryISO, searchStateISO, searchCityId, searchVerificationArray, searchEmploymentType, searchEntityId, sortByDestination, languageISO } = this.state;
    const xmlHeader = '<?xml version="1.0" encoding="utf-8"?>';
    const xmlRequest = '<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/"><Body><GetJobsList xmlns="http://tempuri.org/"><EntityID>' + entityId + '</EntityID><Username>' + username + '</Username><Password>' + password + '</Password><ListKind>' + listKind + '</ListKind><JobID>' + jobId + '</JobID><JobCategoryID>' + jobCategoryId + '</JobCategoryID><JobStatus>' + jobStatus + '</JobStatus><SearchText>' + searchText + '</SearchText><LimitFrom>' + limitForm + '</LimitFrom><LimitCount>' + limitCount + '</LimitCount><SearchBudgetMin>' + searchBudgetMin + '</SearchBudgetMin><SearchBudgetMax>' + SearchBudgetMax + '</SearchBudgetMax><SearchSkillId>' + searchSkillId + '</SearchSkillId><SearchCountryISO>' + searchCountryISO + '</SearchCountryISO><SearchStateISO>' + searchStateISO + '</SearchStateISO><SearchCityId>' + searchCityId + '</SearchCityId><SearchVerificationArray>' + searchVerificationArray + '</SearchVerificationArray><SearchEmploymentType>' + searchEmploymentType + '</SearchEmploymentType><SearchEntityId>' + searchEntityId + '</SearchEntityId><SortByDestination>' + sortByDestination + '</SortByDestination><LanguageISO>' + languageISO + '</LanguageISO></GetJobsList></Body></Envelope>';
    fetch(configs.jobURL, {
      method: 'POST',
      headers: {
        'Authorization': 'Basic YWRtaW53ZWJzaXRlOk5mbjM5Zm5BQWQyMw==',
        'Content-Type': 'text/xml',
      },
      body: xmlHeader + xmlRequest,
    }).then((response) => response.text())
      .then((responseText) => {
        const responseJson = JSON.parse(responseText.split('<return xsi:type="xsd:string">')[1].split('</return>')[0]);
        DB.addJobs(db, responseJson);
      }).catch((error) => {
        return
      });
  }

  renderJobCards = () => {
    return <View>
      {
        this.state.jobs.map((item, key) => {
          return (
            <Card
              jobState="NEW_MESSAGE"
              jobTitle={item.Title}
              userName={item.EntityFirstName + " " + item.EntityLastName}
              // avatarUri={item.avatarUri}
              countryFlag={item.EntityCountry}
              address={item.JobLocation_Address}

              description={item.Description}
              category={'Web Design'}
              subCategories={item.Skills}
              jobType={item.EmploymentType}

              newMessageCount={item.NewMessages}
              // isRead={item.NewMessages > 0 ? true : false}
              timestamp='2 min'
              distance={item.Distance + ' Km'}

              onPress={() => {
                this.props.navigation.navigate('ChatScreen', {
                  jobState: "BID_NOT_PLACED",
                  varified: false
                })
              }}
            />
          );
        })
      }
    </View>
  }

  render() {
    let changeTop = undefined;
    // To animate top header
    return (
      <View style={[styles.container]}>
        <BackgroundImage />
        <Header
          clampedScroll={this.state.clampedScroll}
          bottomComponent={<Search style={{ backgroundColor: '#FFF' }} />}
          mainText="Jobs"
        />
        {!this.state.noOpenJobs && !this.state.noWorkArea &&
          <Animated.ScrollView
            scrollEventThrottle={8}
            style={{ paddingTop: 0 }}
            contentContainerStyle={{ paddingTop: getStatusBarHeight() + 120 }}
            onScroll={Animated.event(
              [{
                nativeEvent: {
                  contentOffset: {
                    y: this.state.scrollAnim
                  }
                }
              }], {
              useNativeDriver: true
            }
            )}
            onMomentumScrollEnd={() => {

            }}
          >
            {this.renderJobCards()}
            <CutomButton
              style={{ borderRadius: 4, paddingVertical: 10, margin: 5 }}
              fontWeight={'300'}
              backgroundColor={Color.color7}
              title={'No work area alert'}
              onPress={() => {
                this.setState({ noWorkArea: true })
              }} />
            <CutomButton
              style={{ borderRadius: 4, paddingVertical: 10, margin: 5 }}
              fontWeight={'300'}
              backgroundColor={Color.color7}
              title={'No jobs found'}
              onPress={() => {
                this.setState({ noOpenJobs: true })
              }} />
          </Animated.ScrollView>
        }
        {this.state.noOpenJobs &&
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <CutomButton
              style={{ borderRadius: 4, paddingVertical: 10, margin: 5, width: 200, opacity: 0.4 }}
              fontWeight={'300'}
              backgroundColor={'#d4d4d4'}
              title={'Go back ( For demo only)'}
              onPress={() => {
                this.setState({ noOpenJobs: false })
              }} />
            <NoOpenJobAlert />
          </View>
        }
        {this.state.noWorkArea && <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <CutomButton
            style={{ borderRadius: 4, paddingVertical: 10, margin: 5, width: 200, opacity: 0.4 }}
            fontWeight={'300'}
            backgroundColor={'#d4d4d4'}
            title={'Go back ( For demo only)'}
            onPress={() => {
              this.setState({ noWorkArea: false })
            }} />
          <WorkAreaNotSet
            onPressConfigure={() => { alert('hello') }}
          />
        </View>
        }
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3E3E3',
    position: 'relative',
    flex: 1
  },
  searchContainer: {
    paddingHorizontal: 15,
    backgroundColor: '#FAFAFA'
  },
  shadow: Platform.OS === "ios" ? {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  } : {
      elevation: 5
    }
})
export default Jobs
