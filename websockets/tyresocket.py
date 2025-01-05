from flask import Flask
from flask_socketio import SocketIO
from message_manager import MessageManager

def start_tyre_service(port, message_manager: MessageManager):
    app = Flask(__name__)
    socketio = SocketIO(app, async_mode='gevent')

    @app.route('/tyre_pressure')
    def handle_tyre():
        data = message_manager.get_data()
        return {"Tyre": data["Tyre"]}

    @socketio.on('connect')
    def handle_connect():
        print("Client connected to Tyre Pressure Service")

    print(f"Tyre Pressure Service running on port {port}")
    socketio.run(app, host='0.0.0.0', port=port)
