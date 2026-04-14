import cv2
import pickle

slots = []

def mouse_click(event, x, y, flags, params):
    if event == cv2.EVENT_LBUTTONDOWN:
        slots.append((x, y))
        print(f"Point added: {(x,y)}")

# Load image
img = cv2.imread(r'C:\Users\banot\OneDrive\Desktop\Smart Parking System\Smart-Parking-System\image.jpg')
cv2.namedWindow("Select Slots")
cv2.setMouseCallback("Select Slots", mouse_click)

while True:
    temp_img = img.copy()

    for point in slots:
        cv2.circle(temp_img, point, 5, (0,0,255), -1)

    cv2.imshow("Select Slots", temp_img)

    if cv2.waitKey(1) & 0xFF == ord('s'):
        break

# Save slots
with open(r"C:\Users\banot\OneDrive\Desktop\Smart Parking System\Smart-Parking-System\Slots.pkl", "wb") as f:
    pickle.dump(slots, f)

print("✅ Slots saved!")
cv2.destroyAllWindows()
