import {main} from "./main";

describe('ให้อาร์เรย์ 2 มิติกำหนดช่วงเวลา [[เวลาเริ่มต้น, เวลาสิ้นสุด], [เวลาเริ่มต้น, เวลาสิ้นสุด]] สำหรับห้องเรียน (เวลาทับซ้อนกันได้) จงจัดสรรจำนวนห้องเรียนให้เหมาะสมกับเวลาที่ใช้', () => {
	test('ให้ [[30, 75]] ควรคืนค่า 1', () => {
		expect(main([[30, 75]])).toBe(1)
	});
	test('ให้ [[30, 75], [0, 50]] ควรคืนค่า 2', () => {
		expect(main([[30, 75], [0, 50]])).toBe(2)
	});
	test('ให้ [[30, 75], [80, 120]] ควรคืนค่า 1', () => {
		expect(main([[30, 75], [80, 120]])).toBe(1)
	});
	test('ให้ [[30, 75], [0, 50], [60, 150]] ควรคืนค่า 2', () => {
		expect(main([[30, 75], [0, 50], [60, 150]])).toBe(2)
	});
	test('ให้ [[30, 75], [0, 50], [60, 150], [45, 50]] ควรคืนค่า 3', () => {
		expect(main([[30, 75], [0, 50], [60, 150], [45, 50]])).toBe(3)
	});
	test('ให้ [[30, 75], [0, 50], [60, 150], [45, 50]] ควรคืนค่า 2', () => {
		expect(main([[30, 75], [80, 120], [60, 150], [45, 50]])).toBe(2)
	});
	test('ให้ [[30, 75], [0, 50], [60, 150], [45, 50], [90, 120]] ควรคืนค่า 3', () => {
		expect(main([[30, 75], [0, 50], [60, 150], [45, 50], [90, 120]])).toBe(3)
	});
});
