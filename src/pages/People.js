import React, { Component } from "react";
import API from "../utils/API";
import { TableBody } from "../components/tableBody";
import { TableHeader } from "../components/tableHeader";
import Wrapper from "../components/wrapper";
import { Navbar } from "../components/navbar";


class People extends Component {
    state = {
        people: [],
        search: ""
    }

    componentDidMount() {
        API.getPeople()
            .then(res =>
                this.setState({
                    people: res.data.results
                })
            )
            .catch(err => console.log(err));
    }
    handleSubmit = (person) => {
        this.setState({search: person})
    }

    handleInputChange = (event) => {
        this.handleSubmit(event.target.value)
    }

    renderSingleView = () => { }
    sortByFirstName = () => {
        let sortFirst = this.state.people.sort(sortName)
        function sortName(a, b) {
            const nameA = a.name.first.toUpperCase();
            const nameB = b.name.first.toUpperCase();

            let compare = 0;
            if (nameA > nameB) {
                compare = 1;
            } else if (nameA < nameB) { compare = -1; }
            return compare;
        }
        this.setState({
            people: sortFirst
        });
    }

    sortByLastName = () => {
        let sortLast = this.state.people.sort(sortName)
        function sortName(a, b) {
            const nameA = a.name.last.toUpperCase();
            const nameB = b.name.last.toUpperCase();

            let compare = 0;
            if (nameA > nameB) {
                compare = 1;
            } else if (nameA < nameB) { compare = -1; }
            return compare;
        }
        this.setState({
            people: sortLast
        });
    }



    render() {
        return (
            <div>
                <Wrapper>
                    <Navbar
                        handleInputChange={this.handleInputChange}
                        handleSubmit={this.handleSubmit}
                    />
                    <table className="table table-dark">
                    <TableHeader
                        sortByFirstName={this.sortByFirstName}
                        sortByLastName={this.sortByLastName}
                    />
                    <TableBody
                        people={this.state.people} 
                        search={this.state.search} 
                    />
                    </table>
                </Wrapper>
            </div>
        )
    }
};

export default People;



