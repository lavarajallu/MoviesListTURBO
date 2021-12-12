import React, { Component, useEffect, useRef } from 'react'
import { View, Text, Image, ScrollView, TextInput, FlatList } from 'react-native';
import StarRating from 'react-native-star-rating';

class MoviesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieslist: [],
            spinner: true
        }
    }
    componentDidMount() {
        fetch("https://yts.mx/api/v2/list_movies.json").then((response) =>

            response.json())
            .then((json) => {

                if (json.status === 'ok') {
                    //   alert("dcnfjdfn")
                    // console.log("skndk",json.status)
                    this.setState({
                        spinner: false,
                        movieslist: json.data.movies
                    })


                } else {
                    alert(json.status_message)
                    this.setState({
                        spinner: false,
                    })
                }
            }

            )
            .catch((error) => {
                    this.setState({
                        spinner: false,
                    })
            })
    }

    renderItem = ({ item }) => {
        console.log("dnfjdnfkndf", item)
        return (
            <View elevation={5} style={{
                padding: 10, backgroundColor: "white", marginTop: 10, marginHorizontal: 10,
                shadowColor: 'grey',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 5,
                shadowOpacity: 1.0
            }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 0.25, }}>
                        {item.medium_cover_image !== "" ?
                            <Image
                                source={{
                                    uri: item.medium_cover_image,
                                }}
                                style={{ width: "100%", height: 100, resizeMode: "stretch" }}
                            /> :
                            <Image
                                source={require('../../images/reactlogo.png')}
                                style={{ width: "100%", height: 100 }}
                            />}
                    </View>
                    <View style={{ flex: 0.75, marginLeft: 10 }}>
                        <View style={{ flex: 1, justifyContent: "space-evenly" }}>
                            <Text style={{ fontWeight: "bold", color: "darkblue", fontSize: 18 }}>{item.title}</Text>
                            <View>
                                <StarRating
                                    disabled={false}
                                    containerStyle={{ width: 220 }}
                                    starSize={20}
                                    maxStars={10}
                                    fullStarColor={"green"}

                                    rating={item.rating !== "" ? item.rating : 0}
                                /></View>
                            <Text style={{ color: "skyblue", fontSize: 15, fontWeight: "600" }}>{"Action | Adventure | Sci-Fi"}</Text>

                        </View>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 0.1, backgroundColor: "lightblue", justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "darkblue", fontSize: 20 }}>Movie Turbo</Text>
                </View>
                <View style={{ flex: 0.9, }}>
                    {this.state.spinner ?
                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                            <Text>Loading....</Text></View> :
                        this.state.movieslist.length > 0 ?
                            <FlatList data={this.state.movieslist}
                                renderItem={this.renderItem.bind(this)} /> :
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Text>No Movies</Text></View>}

                </View>
            </View>
        )
    }

}

export default MoviesList;