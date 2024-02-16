import React from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

// Component to display a list of videos with React Bootstrap grid cards
export default function VideoList({ videos }) {
    return (
        <Row xs={1} md={2} lg={3} className="g-4">
            {/* Map over each video in the list */}
            {videos.map(video => {
                const vidId = video.id.videoId || video.id;

                return (
                    <Col key={vidId}>
                        <Card className="h-100">
                            {/* Link to the video player page */}
                            <Link to={`/video/${vidId}`} className="video-link">
                                <Card.Img variant="top" src={video.snippet.thumbnails.high.url} alt="video thumbnail" />
                                <Card.Body>
                                    {/* Display video title */}
                                    <Card.Title>{video.snippet.title}</Card.Title>
                                    {/* Display video channel */}
                                    <Card.Subtitle className="mb-2 text-muted">{video.snippet.channelTitle}</Card.Subtitle>
                                    {/* Conditional rendering for video statistics */}
                                    {video.statistics && (
                                        <>
                                            <Card.Text className="text-muted1">Likes: {video.statistics.likeCount}</Card.Text>
                                            <Card.Text className= "text-muted2">Views: {video.statistics.viewCount}</Card.Text>
                                        </>
                                    )}
                                </Card.Body>
                            </Link>
                        </Card>
                    </Col>
                );
            })}
        </Row>
    );
}
