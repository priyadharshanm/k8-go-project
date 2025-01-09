# Use the official multi-platform golang image
# FROM golang:1.23
FROM 851725569258.dkr.ecr.us-east-1.amazonaws.com/priyadharshan/kube:golang-1.23


WORKDIR /app

# Copy module definition files and application source
COPY go.mod .
COPY go.sum .
COPY main.go .
COPY kodata/ ./kodata/


# Ensure dependencies are installed for the correct platform
RUN GOARCH=amd64 go build -o bin .

# Set the KO_DATA_PATH environment variable
ENV KO_DATA_PATH=/app/kodata

# Set the binary as the entrypoint
ENTRYPOINT ["/app/bin"]
