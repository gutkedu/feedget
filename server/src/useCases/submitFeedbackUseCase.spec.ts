import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendmail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to send feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg",
      })
    ).resolves.not.toThrow();
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to send a feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to send a feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg",
      })
    ).rejects.toThrow();
  });

  it("should not be able to send a feedback without an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "ta tudo bugado!",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
});
