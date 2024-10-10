"use client";

import React, { useEffect } from "react";
import TicketCard from "./(components)/TicketCard";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch tickets");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading tickets: ", error);
  }
};

const Dashboard = async () => {
  const data = await getTickets();

  // Make sure we have tickets needed for production build.
  if (!data?.tickets) {
    return <p>No tickets.</p>;
  }

  const tickets = data.tickets;

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  // Prepare data for the bar charts
  const ticketsByDate = tickets.reduce((acc, ticket) => {
    const date = new Date(ticket.date).toLocaleDateString();
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {});

  const ticketsByPriority = tickets.reduce((acc, ticket) => {
    acc[ticket.priority] = (acc[ticket.priority] || 0) + 1;
    return acc;
  }, {});

  // Data for the bar chart (Tickets by Date)
  const ticketsByDateData = {
    labels: Object.keys(ticketsByDate),
    datasets: [
      {
        label: "Tickets by Date",
        data: Object.values(ticketsByDate),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  // Data for the bar chart (Tickets by Priority)
  const ticketsByPriorityData = {
    labels: Object.keys(ticketsByPriority),
    datasets: [
      {
        label: "Tickets by Priority",
        data: Object.values(ticketsByPriority),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
    ],
  };

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>

      {/* Bar chart: Tickets by Date */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Tickets by Date</h3>
        <Bar data={ticketsByDateData} />
      </div>

      {/* Bar chart: Tickets by Priority */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Tickets by Priority</h3>
        <Bar data={ticketsByPriorityData} />
      </div>
    </div>
  );
};

export default Dashboard;
