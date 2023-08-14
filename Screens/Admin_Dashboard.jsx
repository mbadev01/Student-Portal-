import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../Components/Header";
import { Avatar, Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Admin_Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            paddingTop: 20,
            backgroundColor: "#fff",
          }}
        >
          <Card>
            <Card.Title
              title="Department"
              subtitle="Register or edit Department"
              left={() => (
                <Avatar.Icon
                  icon="office-building"
                  size={50}
                  style={{ backgroundColor: "#780000" }}
                />
              )}
            />

            <Card.Actions>
              <TouchableOpacity>
                <Button
                  onPress={() => navigation.navigate("Register_Dept")}
                  textColor="white"
                  style={{ backgroundColor: "#780000" }}
                >
                  ADD/EDIT
                </Button>
              </TouchableOpacity>
            </Card.Actions>
          </Card>
          <View style={{ marginTop: 10 }}>
            <Card>
              <Card.Title
                title="Program"
                subtitle="Register or edit Program"
                left={() => (
                  <Avatar.Icon
                    icon="school-outline"
                    size={50}
                    style={{ backgroundColor: "#780000" }}
                  />
                )}
              />

              <Card.Actions>
                <TouchableOpacity>
                  <Button
                    onPress={() => navigation.navigate("Register_Program")}
                    textColor="white"
                    style={{ backgroundColor: "#780000" }}
                  >
                    ADD/EDIT
                  </Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </View>

          <View style={{ marginTop: 10 }}>
            <Card>
              <Card.Title
                title="Session"
                subtitle="Register or edit Session"
                left={() => (
                  <Avatar.Icon
                    icon="calendar-blank"
                    size={50}
                    style={{ backgroundColor: "#780000" }}
                  />
                )}
              />

              <Card.Actions>
                <TouchableOpacity>
                  <Button
                    onPress={() => navigation.navigate("Register Session")}
                    textColor="white"
                    style={{ backgroundColor: "#780000" }}
                  >
                    ADD/EDIT
                  </Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </View>
          <View style={{ marginTop: 10 }}>
            <Card>
              <Card.Title
                title="Section"
                subtitle="Register or edit Section"
                left={() => (
                  <Avatar.Icon
                    icon="animation"
                    size={50}
                    style={{ backgroundColor: "#780000" }}
                  />
                )}
              />

              <Card.Actions>
                <TouchableOpacity>
                  <Button
                    onPress={() => navigation.navigate("Register Section")}
                    textColor="white"
                    style={{ backgroundColor: "#780000" }}
                  >
                    ADD/EDIT
                  </Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </View>
          <View style={{ marginTop: 10 }}>
            <Card>
              <Card.Title
                title="Semester"
                subtitle="Register or edit Semester"
                left={() => (
                  <Avatar.Icon
                    icon="book-open-variant"
                    size={50}
                    style={{ backgroundColor: "#780000" }}
                  />
                )}
              />

              <Card.Actions>
                <TouchableOpacity>
                  <Button
                    onPress={() => navigation.navigate("Register Semester")}
                    textColor="white"
                    style={{ backgroundColor: "#780000" }}
                  >
                    ADD/EDIT
                  </Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </View>
          <View style={{ marginTop: 10 }}>
            <Card>
              <Card.Title
                title="Subject"
                subtitle="Register or edit Subject"
                left={() => (
                  <Avatar.Icon
                    icon="note-text-outline"
                    size={50}
                    style={{ backgroundColor: "#780000" }}
                  />
                )}
              />

              <Card.Actions>
                <TouchableOpacity>
                  <Button
                    onPress={() => navigation.navigate("Register Subject")}
                    textColor="white"
                    style={{ backgroundColor: "#780000" }}
                  >
                    ADD/EDIT
                  </Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </View>
          <View style={{ marginTop: 10 }}>
            <Card>
              <Card.Title
                title="Teacher"
                subtitle="Register or edit Teacher"
                left={() => (
                  <Avatar.Icon
                    icon="account"
                    size={50}
                    style={{ backgroundColor: "#780000" }}
                  />
                )}
              />

              <Card.Actions>
                <TouchableOpacity>
                  <Button
                    onPress={() => navigation.navigate("Register Teacher")}
                    textColor="white"
                    style={{ backgroundColor: "#780000" }}
                  >
                    ADD/EDIT
                  </Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </View>
          <View style={{ marginTop: 10 }}>
            <Card>
              <Card.Title
                title="Search Student"
                subtitle="See individual student attendance and result "
                left={() => (
                  <Avatar.Icon
                    icon="account-group"
                    size={50}
                    style={{ backgroundColor: "#780000" }}
                  />
                )}
              />

              <Card.Actions>
                <TouchableOpacity>
                  <Button
                    onPress={() => navigation.navigate("Search Student")}
                    textColor="white"
                    style={{ backgroundColor: "#780000" }}
                  >
                    Search
                  </Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </View>
          <View style={{ marginTop: 10 }}>
            <Card>
              <Card.Title
                title="Result Record"
                subtitle="See all result records. "
                left={() => (
                  <Avatar.Icon
                    icon="dresser"
                    size={50}
                    style={{ backgroundColor: "#780000" }}
                  />
                )}
              />

              <Card.Actions>
                <TouchableOpacity>
                  <Button
                    textColor="white"
                    style={{ backgroundColor: "#780000" }}
                  >
                    View
                  </Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </View>
          <View style={{ marginTop: 10 }}>
            <Card>
              <Card.Title
                title="Attendance Record"
                subtitle="See all attendance records. "
                left={() => (
                  <Avatar.Icon
                    icon="animation"
                    size={50}
                    style={{ backgroundColor: "#780000" }}
                  />
                )}
              />

              <Card.Actions>
                <TouchableOpacity>
                  <Button
                    textColor="white"
                    style={{ backgroundColor: "#780000" }}
                  >
                    View
                  </Button>
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Button textColor="white" style={{ backgroundColor: "#780000" }}>
            Log Out
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default Admin_Dashboard;
